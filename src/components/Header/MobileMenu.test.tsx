import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileMenu from './MobileMenu';

const mockProps = {
  mobMenu: false,
  toggleMobileMenu: () => {},
  navItems: [
    { title: 'mocked menu 1', url: '/mocked1' },
    { title: 'mocked menu 2', url: '/mocked2' },
  ],
};

describe('<MobileMenu />', () => {
  test('Should render correctly', () => {
    render(<MobileMenu {...mockProps} />);
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
  });
});
