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
    console.log(a, b);
    return a + parseInt(b.height);
  }, 0);
};

export const calculateFeet = height => {
  return height * 30.48;
};

export const calculateInches = height => {
  return height / 2.54;
};

export const formatHeight = height => {
  if (!height) {
    return '-';
  }

  return `${height}cm (${calculateFeet(height)}ft/${calculateInches(
    height
  )}in)`;
};
