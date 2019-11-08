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


export const calculateHeight = (array) => {
  return array.reduce((a, b) =>{
    console.log(a, b)
    return a + b
  }, 0)
}