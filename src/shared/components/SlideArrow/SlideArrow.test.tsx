import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SlideArrow, { ArrowProps } from '.';

const mockProps: ArrowProps = {
  direction: 'next',
  onClick: jest.fn(),
};

describe('<SlideArrow/>', () => {
  let img: HTMLImageElement;
  beforeEach(() => {
    render(<SlideArrow {...mockProps} />);
    img = screen.getByRole('img', { name: 'flecha siguiente producto' });
  });

  test('It should render correctly', () => {
    expect(img).toBeInTheDocument();
  });

  test('onClick function passed by props gets called', () => {
    fireEvent.click(img);
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
