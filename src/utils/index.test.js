import {
  formatGender,
  calculateHeights,
  calculateFeet,
  calculateInches,
  formatHeight,
  sortHeight,
  sortName
} from './index';

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

  it('test culatcalculateFeet', () => {
    const response = calculateFeet(120);
    expect(response).toEqual(3);
  });

  it('test calculateInches', () => {
    const response = calculateInches(200);
    expect(response).toEqual('79.00');
  });

  it('test formatHeight', () => {
    const response = formatHeight(200);
    expect(response).toEqual('200cm');
  });

  it('test empty state for formatHeight', () => {
    const response = formatHeight();
    expect(response).toEqual('-');
  });

  it('test asc case for sortHeight', () => {
    const testArray = [{ height: 20 }, { height: 10 }];
    const response = sortHeight(testArray, 'asc');
    expect(response).toEqual([{ height: 10 }, { height: 20 }]);
  });

  it('test desc case for sortHeight', () => {
    const testArray = [{ height: 10 }, { height: 20 }];
    const response = sortHeight(testArray, 'dsc');
    expect(response).toEqual([{ height: 20 }, { height: 10 }]);
  });

  it('test default case for sortHeight', () => {
    const testArray = [{ height: 10 }, { height: 20 }];
    const response = sortHeight(testArray, '');
    expect(response).toEqual(testArray);
  });

  it('test default case for sortName', () => {
    const testArray = [
      { name: 'Ezekiel', height: 10 },
      { name: 'John', height: 20 }
    ];
    const response = sortName(testArray, '');
    expect(response).toEqual(testArray);
  });

  it('test asc case for sortName', () => {
    const testArray = [
      { name: 'John', height: 20 },
      { name: 'Ezekiel', height: 10 }
    ];
    const response = sortName(testArray, 'asc');
    expect(response).toEqual([
      { name: 'Ezekiel', height: 10 },
      { name: 'John', height: 20 }
    ]);
  });

  it('test dsc case for sortName', () => {
    const testArray = [
      { name: 'Ezekiel', height: 10 },
      { name: 'John', height: 20 }
    ];
    const response = sortName(testArray, 'dsc');
    expect(response).toEqual([
      { name: 'John', height: 20 },
      { name: 'Ezekiel', height: 10 }
    ]);
  });
});