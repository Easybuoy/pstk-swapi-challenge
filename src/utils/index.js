export const formatGender = gender => {
  const genderLookup = {
    male: 'M',
    female: 'F',
    hermaphrodite: 'H',
    'n/a': 'N/A'
  };
  return genderLookup[gender];
};

export const calculateHeights = array => {
  const heightsSum = array.reduce((a, b) => {
    if (b.height === 'unknown') {
      return a;
    } else {
      return a + parseInt(b.height);
    }
  }, 0);
  return heightsSum;
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

  return `${height}`;
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

export const sortGender = (array, order) => {
  switch (order) {
    case 'asc':
      return array.sort((a, b) => a.gender.localeCompare(b.gender));
    case 'dsc':
      return array.sort((a, b) => b.gender.localeCompare(a.gender));
    default:
      return array;
  }
};

export const filterGender = (array, condition) => {
  switch (condition) {
    case 'MALE':
      return array.filter(word => word.gender === 'male');
    case 'FEMALE':
      return array.filter(word => word.gender === 'female');
    case 'HERMAPHODITE':
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

export const addMovieDataToLocalStorage = (movie, characters) => {
  initializeLocalStorage();

  try {
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
  } catch (err) {
    return false;
  }
};

export const getMovieFromLocalStorage = title => {
  initializeLocalStorage();
  const movieData = JSON.parse(localStorage.getItem('movieData'));
  return movieData.filter(movie => {
    if (movie.title === title) {
      if (!oneDayAgo(movie.created_at)) {
        // movie found, but less than a day
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

export const oneDayAgo = date => {
  let oneDayAgo = new Date();
  oneDayAgo = oneDayAgo.setDate(oneDayAgo.getDate() - 1);
  let difference = date - oneDayAgo;
  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  if (daysDifference === 0) {
    return false;
  } else {
    return true;
  }
};

export const requestFromAPI = async (url, method = 'GET') => {
  const response = await fetch(url, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};
