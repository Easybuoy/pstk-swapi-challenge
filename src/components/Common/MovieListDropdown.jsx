import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PreLoader from '../Common/PreLoader';
import {
  getMovies,
  selectMovie,
  getMovie,
  setCharacters,
  setMovie
} from '../../actions';
import { MovieListDropdown as StyledMovieListDropdown } from '../../styles';
import Select from './Select';
import { getMovieFromLocalStorage } from '../../utils';

export const MovieListDropdown = ({
  movies,
  selectMovie,
  getMovies,
  getMovie,
  setCharacters,
  setMovie
}) => {
  const [movieValue, setMovieValue] = useState('');

  useEffect(() => {
    getMovies();
    setMovieValue('Select Star Wars Movie');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    const { title, url } = JSON.parse(value);
    setMovieValue(value);
    selectMovie(title);

    // check if movie exist in localstorage
    const existingMovieInLocalStorage = getMovieFromLocalStorage(title);
    console.log(existingMovieInLocalStorage)
    if (existingMovieInLocalStorage.length > 0) {
      // we found the movie in localstorage
      setCharacters(existingMovieInLocalStorage[0].characters);
      setMovie(existingMovieInLocalStorage[0].movie);
    } else {
      //we could not find movie in localstorage, thus get from api
      getMovie(url);
    }
  };

  let dropDownItems = '';

  if (movies.length > 0) {
    dropDownItems = (
      <Select
        items={movies.sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        )}
        value={movieValue}
        onChange={handleChange}
        defaultValue="Select Star Wars Movie"
      />
    );
  } else {
    dropDownItems = <PreLoader />;
  }

  return (
    <StyledMovieListDropdown>
      <h1>Star Wars</h1>

      {dropDownItems}
    </StyledMovieListDropdown>
  );
};

MovieListDropdown.propTypes = {
  getMovies: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
  setCharacters: PropTypes.func.isRequired,
  setMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading.loading,
  error: state.error.error,
  movies: state.swapi.movies,
  movie: state.swapi.movie,
  selectedMovie: state.swapi.selectedMovie
});

export default connect(
  mapStateToProps,
  { getMovies, selectMovie, getMovie, setCharacters, setMovie }
)(MovieListDropdown);
