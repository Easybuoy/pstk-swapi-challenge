import { formatGender, calculateHeights, calculateFeet } from './index';

describe('Util', () => {
  it('test male case Format Gender', () => {
    const response = formatGender('male');
    expect(response).toEqual('M');
  });

  it('test female case for Format Gender', () => {
    const response = formatGender('female');
    expect(response).toEqual('F');
  });

  it('test default case for Format Gender', () => {
    const response = formatGender();
    expect(response).toEqual('-');
  });

  it('test calculateHeights', () => {
    const testArray = [{ height: 10 }, { height: 20 }];
    const response = calculateHeights(testArray);
    expect(response).toEqual(30);
  });
});
