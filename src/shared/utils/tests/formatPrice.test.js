import '@testing-library/jest-dom';
import formatPrice from '../formatPrice';

describe('formatPrice', () => {
  test('Should format price correctly', () => {
    const expected = '16.000 COP';
    const recieved = formatPrice(16000);

    expect(recieved).toEqual(expected);
  });
});
