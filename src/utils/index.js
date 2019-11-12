export const formatGender = gender => {
  console.log(gender)
  switch (gender) {
    case 'male':
      return 'M';
    case 'female':
      return 'F';
    default:
      return '-';
  }
};

export const calculateHeights = array => {
  return array.reduce((a, b) => {
    if (b.height !== 'unknown') {
      return a + parseInt(b.height);
    }
    return a;
  }, 0);
};

export const calculateFeet = height => {
  return parseInt(height / 30.48);
};

export const calculateInches = height => {
  return Math.round(height / 2.54).toFixed(2);
};

export const formatHeight = height => {
  if (!height) {
    return '-';
  }

  return `${height}cm`;
};

export const sortHeight = (array, order) => {
  switch (order) {
    case 'asc':
      return array.sort((a, b) => a.height - b.height);
    case 'dsc':
      return array.sort((a, b) => b.height - a.height);
    default:
      return array;
  }
};

export const sortGender = (array, letter) => {
  switch (letter) {
    case 'M':
      return array.filter(word => word.gender === 'male');
    case 'F':
      return array.filter(word => word.gender === 'female');
    default:
      return array;
  }
};

export const sortName = (array, order) => {
  switch (order) {
    case 'asc':
      return array.sort((a, b) => a.name.localeCompare(b.name));
    case 'dsc':
      return array.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return array;
  }
};
