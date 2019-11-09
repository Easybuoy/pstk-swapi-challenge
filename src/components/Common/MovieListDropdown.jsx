import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PreLoader from '../Common/PreLoader';
import { getMovies, selectMovie, getMovie } from '../../actions';
import {
  MovieListDropdown as StyledMovieListDropdown,
  Select
} from '../../styles';

export const MovieListDropdown = ({ movies, selectMovie, getMovies, getMovie }) => {
  const [movieValue, setMovieValue] = useState('');

  useEffect(() => {
    getMovies();
    setMovieValue('Select Movie');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    setMovieValue(value);
    selectMovie(value);
    getMovie(value);
  };

  let dropDownItems = '';

  if (movies.length > 0) {
    dropDownItems = (
      <Select value={movieValue} onChange={handleChange}>
        <option value="Select Movie" disabled>
          Select Star Wars Movie
        </option>

        {movies
          .sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
          .map(movie => (
            <option key={movie.title} value={movie.url} onChange={handleChange}>
              {movie.title}
            </option>
          ))}
      </Select>
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
  getMovie: PropTypes.func.isRequired
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
  { getMovies, selectMovie, getMovie }
)(MovieListDropdown);
