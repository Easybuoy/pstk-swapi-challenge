export const formatGender = gender => {
  switch (gender) {
    case 'male':
      return 'M';
    case 'female':
      return 'F';
    case 'hermaphrodite':
      return 'H';
    default:
      return 'N/A';
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
    case 'H':
      return array.filter(word => word.gender === 'hermaphrodite');
    case 'N/A':
      return array.filter(word => word.gender === 'n/a');
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

export const addMovieToLocalStorage = (movie, characters) => {
  initializeLocalStorage();

  const movieData = JSON.parse(localStorage.getItem('movieData'));
  if (movieData) {
    const latestMovies = movieData.concat({
      title: movie.title,
      movie,
      characters,
      created_at: Date.now()
    });
    localStorage.setItem('movieData', JSON.stringify(latestMovies));
    return latestMovies;
  }
};

export const getMovieFromLocalStorage = title => {
  initializeLocalStorage();
  const movieData = JSON.parse(localStorage.getItem('movieData'));
  return movieData.filter((movie, i) => {
    if (movie.title === title) {
      console.log(OneDayAgo(movie.created_at), 'isv');
      if (!OneDayAgo(movie.created_at)) {
        //movie found, but less than a day
        console.log('movie not one day old');
        return movie;
      }
    }
    return null;
  });
};

export const initializeLocalStorage = () => {
  if (!localStorage.getItem('movieData')) {
    localStorage.setItem('movieData', JSON.stringify([]));
  }
};

const OneDayAgo = date => {
  //   const date1 = new Date('11/12/2019');
  // const date2 = new Date('11/13/2019');
  // const diffTime = Math.abs(date2 - date1);
  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // console.log(diffDays);
  let oneDayAgo = new Date();
  oneDayAgo = oneDayAgo.setDate(oneDayAgo.getDate() - 1);
  console.log(oneDayAgo, 'oneDayAgo');
  const todayDate = Date.now();
  // var ts = Math.round(new Date().getTime() / 1000);
  // var tsYesterday = ts - 24 * 3600;
  // console.log(
  //   tsYesterday,
  //   'onedayagpo'
  // );
  var difference = (date - oneDayAgo)
    var daysDifference = Math.floor(difference/1000/60/60/24);

    console.log( daysDifference)
  console.log('today', todayDate);
  // const OneDay = Date.now() + 1 * 24 * 60 * 60 * 1000;
  if (date > todayDate) {
    return false;
  } else if (date < todayDate) {
    return true;
  }
};
