import {
  formatGender,
  calculateHeights,
  calculateFeet,
  calculateInches,
  formatHeight,
  sortHeight,
  sortName,
  sortGender
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

  it('test hermaphrodite case for Format Gender', () => {
    const response = formatGender('hermaphrodite');
    expect(response).toEqual('H');
  });

  it('test default case for Format Gender', () => {
    const response = formatGender();
    expect(response).toEqual('N/A');
  });

  it('test calculateHeights', () => {
    const testArray = [{ height: 10 }, { height: 20 }];
    const response = calculateHeights(testArray);
    expect(response).toEqual(30);
  });

  it('test calculateHeights edgecase', () => {
    const testArray = [{ height: 10 }, { height: 'unknown' }];
    const response = calculateHeights(testArray);
    expect(response).toEqual(10);
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

  it('test default case for sortGender', () => {
    const testArray = [
      { name: 'John', height: 20, gender: 'male' },
      { name: 'Ezekiel', height: 10, gender: 'female' }
    ];
    const response = sortGender(testArray, 'asc');
    expect(response).toEqual([
      { name: 'John', height: 20, gender: 'male' },
      { name: 'Ezekiel', height: 10, gender: 'female' }
    ]);
  });

  it('test female case for sortGender', () => {
    const testArray = [
      { name: 'John', height: 20, gender: 'male' },
      { name: 'Ezekiel', height: 10, gender: 'female' }
    ];
    const response = sortGender(testArray, 'F');
    expect(response).toEqual([
      { name: 'Ezekiel', height: 10, gender: 'female' }
    ]);
  });

  it('test hermaphrodite case for sortGender', () => {
    const testArray = [
      { name: 'John', height: 20, gender: 'male' },
      { name: 'Jayne', height: 10, gender: 'hermaphrodite' }
    ];
    const response = sortGender(testArray, 'H');
    expect(response).toEqual([
      { name: 'Jayne', height: 10, gender: 'hermaphrodite' }
    ]);
  });

  it('test n/a case for sortGender', () => {
    const testArray = [
      { name: 'John', height: 20, gender: 'male' },
      { name: 'Jayne', height: 10, gender: 'n/a' }
    ];
    const response = sortGender(testArray, 'N/A');
    expect(response).toEqual([{ name: 'Jayne', height: 10, gender: 'n/a' }]);
  });

  it('test male case for sortGender', () => {
    const testArray = [
      { name: 'Ezekiel', height: 10, gender: 'male' },
      { name: 'John', height: 20, gender: 'female' }
    ];
    const response = sortGender(testArray, 'M');
    expect(response).toEqual([{ name: 'Ezekiel', height: 10, gender: 'male' }]);
  });
});
