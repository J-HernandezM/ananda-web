import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeFirstSection from './index';

describe('<HomeFirstSection>', () => {
  test('It should render correctly', () => {
    render(<HomeFirstSection />);
    const img = screen.getByRole('img', { name: 'Logo Ananda' });
    expect(img).toBeInTheDocument();
  });
});
