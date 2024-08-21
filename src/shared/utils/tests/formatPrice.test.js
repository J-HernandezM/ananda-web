import '@testing-library/jest-dom';
import formatPrice from '../formatPrice';

describe('formatPrice', () => {
  test('Should format price correctly with COP', () => {
    const expected = '16.000 COP';
    const recieved = formatPrice(16000);

    expect(recieved).toEqual(expected);
  });

  test('Should format price correctly without COP', () => {
    const expected = '16.000';
    const recieved = formatPrice(16000, false);

    expect(recieved).toEqual(expected);
  });
});
