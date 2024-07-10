import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BackgroundTopPhoto from './index';

const mockProps = {
  src: {
    src: '/imagen.png',
    width: 20,
    height: 20,
  },
};

describe('<BackgroundTopPhoto>', () => {
  test('It should render correctly', () => {
    render(<BackgroundTopPhoto {...mockProps} />);
    const img = screen.getByRole('presentation');
    expect(img).toBeInTheDocument();
  });
});
