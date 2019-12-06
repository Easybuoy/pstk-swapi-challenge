export const formatGender = (gender, characters = []) => {
  let genderLookup = {};
  characters.forEach(character => {
    if (!genderLookup[character.gender]) {
      genderLookup[character.gender] = character.gender[0].toUpperCase();
    }
  });

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
  if (condition === 'ALL') {
    return array;
  }

  return array.filter(word => word.gender === condition.toLowerCase());
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
  try {
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
  } catch (error) {
    return null;
  }
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

export const genderFilterFromCharacters = (characters = []) => {
  let filter = [{ title: 'ALL' }];

  if (characters.length > 0) {
    characters.reduce((prev, curr) => {
      if (filter.findIndex(x => x.title.toLowerCase() === curr.gender) === -1) {
        filter = filter.concat({ title: curr.gender.toUpperCase() });
      }
      return prev;
    }, []);
  }

  return filter.sort((a, b) => a.title.localeCompare(b.title));
};

export const sortNameField = (
  nameOrder,
  setNameOrder,
  setGenderOrder,
  setHeightOrder,
  setStateCharacters,
  array
) => {
  let sorted = [];
  if (nameOrder === 0 || nameOrder === undefined) {
    sorted = sortName(array, 'asc');
    setNameOrder(1);
    setGenderOrder(undefined);
    setHeightOrder(undefined);
  }

  if (nameOrder === 1) {
    sorted = sortName(array, 'dsc');
    setNameOrder(0);
    setGenderOrder(undefined);
    setHeightOrder(undefined);
  }
  setStateCharacters(sorted);
};

export const sortHeightField = (
  heightOrder,
  setHeightOrder,
  setGenderOrder,
  setNameOrder,
  setStateCharacters,
  array
) => {
  let sorted = [];
  if (heightOrder === 0 || heightOrder === undefined) {
    sorted = sortHeight(array, 'asc');
    setHeightOrder(1);
    setGenderOrder(undefined);
    setNameOrder(undefined);
  }

  if (heightOrder === 1) {
    sorted = sortHeight(array, 'dsc');
    setHeightOrder(0);
    setGenderOrder(undefined);
    setNameOrder(undefined);
  }

  setStateCharacters(sorted);
};

export const sortGenderField = (
  genderOrder,
  setGenderOrder,
  setNameOrder,
  setHeightOrder,
  setStateCharacters,
  array
) => {
  let sorted = [];
  if (genderOrder === 0 || genderOrder === undefined) {
    sorted = sortGender(array, 'asc');
    setGenderOrder(1);
    setNameOrder(undefined);
    setHeightOrder(undefined);
  }

  if (genderOrder === 1) {
    sorted = sortGender(array, 'dsc');
    setGenderOrder(0);
    setNameOrder(undefined);
    setHeightOrder(undefined);
  }

  setStateCharacters(sorted);
};

export const filterGenderField = (array, letter, setStateCharacters) => {
  const sorted = filterGender(array, letter);
  setStateCharacters(sorted);
};
