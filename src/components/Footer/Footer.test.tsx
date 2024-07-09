import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './index';

describe('<Footer>', () => {
  test('It should render correctly', () => {
    render(<Footer />);
    const sectionTitle = screen.getByText(/nosotros/i);
    expect(sectionTitle).toBeInTheDocument();
  });
});
