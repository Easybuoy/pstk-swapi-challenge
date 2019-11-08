import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovies, selectMovie, getMovie } from '../../actions';
import StyledMovieListDropdown from './StyledMovieListDropdown';

const MovieListDropdown = ({
  movies,
  selectMovie,
  getMovies,
  getMovie,
}) => {
  const [movieValue, setMovieValue] = useState('');

  useEffect(() => {
    getMovies();
    setMovieValue('Select Movie');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    console.log(value)
    setMovieValue(value);
    selectMovie(value);
    getMovie(value);
  };

  return (
    <StyledMovieListDropdown>
      <select value={movieValue} onChange={handleChange}>
        <option value="Select Movie" disabled>
          Select Movie
        </option>

        {movies
          .sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
          .map((movie, i) => (
            <option key={movie.title} value={movie.url} onChange={handleChange}>
              {movie.title}
            </option>
          ))}
      </select>
    </StyledMovieListDropdown>
  );
};

MovieListDropdown.propTypes = {
  loading: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
  movies: state.swapi.movies,
  movie: state.swapi.movie,
  selectedMovie: state.swapi.selectedMovie
});

export default connect(
  mapStateToProps,
  { getMovies, selectMovie, getMovie }
)(MovieListDropdown);
