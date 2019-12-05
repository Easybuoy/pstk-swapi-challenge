import {
  formatGender,
  calculateHeights,
  calculateFeet,
  calculateInches,
  formatHeight,
  sortHeight,
  sortName,
  sortGender,
  filterGender,
  initializeLocalStorage,
  oneDayAgo,
  getMovieFromLocalStorage
} from './index';

import mock from '../__mocks__/mock';
const { getMovieDataMock } = mock;

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
    expect(response).toEqual('200');
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

  it('test asc case for sortGender', () => {
    const testArray = [{ gender: 'male' }, { gender: 'female' }];
    const response = sortGender(testArray, 'asc');
    expect(response).toEqual([{ gender: 'female' }, { gender: 'male' }]);
  });

  it('test desc case for sortGender', () => {
    const testArray = [{ gender: 'male' }, { gender: 'female' }];
    const response = sortGender(testArray, 'dsc');
    expect(response).toEqual([{ gender: 'male' }, { gender: 'female' }]);
  });

  it('test default case for sortGender', () => {
    const testArray = [{ gender: 'male' }, { gender: 'n/a' }];
    const response = sortGender(testArray, '');
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

  it('test default case for filterGender', () => {
    const testArray = [
      { name: 'John', height: 20, gender: 'male' },
      { name: 'Ezekiel', height: 10, gender: 'female' }
    ];
    const response = filterGender(testArray, 'ALL');
    expect(response).toEqual([
      { name: 'John', height: 20, gender: 'male' },
      { name: 'Ezekiel', height: 10, gender: 'female' }
    ]);
  });

  it('test female case for filterGender', () => {
    const testArray = [
      { name: 'John', height: 20, gender: 'male' },
      { name: 'Ezekiel', height: 10, gender: 'female' }
    ];
    const response = filterGender(testArray, 'FEMALE');
    expect(response).toEqual([
      { name: 'Ezekiel', height: 10, gender: 'female' }
    ]);
  });

  it('test hermaphrodite case for filterGender', () => {
    const testArray = [
      { name: 'John', height: 20, gender: 'male' },
      { name: 'Jayne', height: 10, gender: 'hermaphrodite' }
    ];
    const response = filterGender(testArray, 'HERMAPHRODITE');
    expect(response).toEqual([
      { name: 'Jayne', height: 10, gender: 'hermaphrodite' }
    ]);
  });

  it('test n/a case for filterGender', () => {
    const testArray = [
      { name: 'John', height: 20, gender: 'male' },
      { name: 'Jayne', height: 10, gender: 'n/a' }
    ];
    const response = filterGender(testArray, 'N/A');
    expect(response).toEqual([{ name: 'Jayne', height: 10, gender: 'n/a' }]);
  });

  it('test male case for filterGender', () => {
    const testArray = [
      { name: 'Ezekiel', height: 10, gender: 'male' },
      { name: 'John', height: 20, gender: 'female' }
    ];
    const response = filterGender(testArray, 'MALE');
    expect(response).toEqual([{ name: 'Ezekiel', height: 10, gender: 'male' }]);
  });

  it('test OneDayAgo', () => {
    const response = oneDayAgo(Date.now());
    expect(response).toEqual(true);
  });

  it('test getMovieFromLocalStorage with invalid movie', () => {
    localStorage.setItem('movieData', JSON.stringify(getMovieDataMock));
    const response = getMovieFromLocalStorage('ezekiel');
    expect(response).toEqual([]);
  });

  it('test getMovieFromLocalStorage with valid movie', () => {
    localStorage.setItem('movieData', JSON.stringify(getMovieDataMock));
    const response = getMovieFromLocalStorage('A New Hope');
    const expected = localStorage.getItem('movieData');
    expect(response).toEqual(JSON.parse(expected));
  });

  it('test initializeLocalStorage', () => {
    localStorage.removeItem('movieData');
    expect(initializeLocalStorage()).toEqual(undefined);
  });
});
