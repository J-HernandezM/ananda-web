import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';
import { usePathname, useRouter } from 'next/navigation';
import userEvent from '@testing-library/user-event';

// Stub for next/navigation methods
jest.mock('next/navigation', () => ({ usePathname: jest.fn(), useRouter: jest.fn() }));

describe('<Header />', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/some-route');
    (useRouter as jest.Mock).mockReturnValue('/some-route');
    render(<Header />);
    jest.clearAllMocks();
  });

  test('Should render correctly', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  test('Click at menuIcon should open MobileMenu', async () => {
    // Arrange
    const icon = screen.getByRole('img', { name: 'Abrir y cerrar menu' });

    // Act
    await act(() => {
      fireEvent.click(icon);
    });

    // Assert
    await waitFor(() => {
      const mobileMenuUl = screen.getByTitle('mobileMenu');
      expect(mobileMenuUl).toHaveClass('header--mobile-true');
    });
  });

  // TODO: consult if this approach is correct
  // Explanation: without the change in href we get console.error wich is a test-only warning from a non implemented yet feature with JSDOM (navigation)
  test('Click on a Link should produce a re render (in to a different route)', async () => {
    // Arrange
    const link = screen.getAllByRole('link', { name: 'Nosotros' })[0];
    // Ensure link is an Anchor element
    if (!(link instanceof HTMLAnchorElement)) return;

    // To avoid console.error about jsdom not having navigation yet
    link.href = `#${link.href.split('/').at(-1)}`;

    // Act
    await act(() => {
      // Make the navigation (should produce a re-render)
      userEvent.click(link);
    });

    // Assert
    await waitFor(() => {
      // If re-render happens to occur, then usePathname should be called
      expect(usePathname).toHaveBeenCalled();
    });
  });
});
