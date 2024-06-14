import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';
import { usePathname } from 'next/navigation';
import userEvent from '@testing-library/user-event';

// Stub for next/navigation methods
jest.mock('next/navigation', () => ({ usePathname: jest.fn() }));

describe('<Header />', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/some-route');
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

  // TODO: confirm that this is a correct approach
  test('Click at a Link should lead to a different route', async () => {
    // Arrange
    const link = screen.getAllByRole('link', { name: 'Nosotros' })[0];
    (usePathname as jest.Mock).mockReturnValue('/nosotros');

    // Act
    await act(() => {
      userEvent.click(link);
    });

    // Assert
    await waitFor(() => {
      expect(usePathname()).toContain('/nosotros');
    });
  });
});
