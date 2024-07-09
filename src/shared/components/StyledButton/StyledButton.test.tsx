import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StyledButton from './index';

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt}></img>
));

const mockProps = {
  text: 'texto de prueba',
  icon: '/imagen.png',
  onclick: jest.fn(),
  customClass: 'myCustomClass',
};

describe('<StyledButton>', () => {
  let btn: HTMLButtonElement;

  beforeEach(() => {
    render(<StyledButton {...mockProps} />);
    btn = screen.getByRole('button');
  });

  test('It should render correctly', () => {
    expect(btn).toBeInTheDocument();
  });

  test('Click event should execute onclick function passed by props', () => {
    fireEvent.click(btn);
    expect(mockProps.onclick).toHaveBeenCalledTimes(1);
  });
});
