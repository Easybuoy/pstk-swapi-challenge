export const formatGender = gender => {
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
    return a + parseInt(b.height);
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

  return `${height}cm (${calculateFeet(height)}ft/${calculateInches(
    height
  )}in)`;
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

export const sortName = (array, order) => {
  switch (order) {
    case 'asc':
        return array.sort((a, b) => a.name.localeCompare(b.name))
    case 'dsc':
        return array.sort((a, b) => b.name.localeCompare(a.name))
    default:
        return array;
  }
};

export const sortArrow = order => {
  switch (order) {
    case 0:
        return {__html: '<span>&darr;</span>'};
    case 1:
        return {__html: '<span>&darr;</span>'};
    default:
        return 
  }
}