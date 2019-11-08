export const formatGender = gender => {
  //   if (!gender) {
  //     return '-';
  //   }

  //   if (gender == 'male') {
  //     return 'M';
  //   }
  console.log(gender)
  switch (gender) {
    case 'male':
      return 'M';
    case 'female':
        return 'F'
    default:
      return '-';
  }
};
