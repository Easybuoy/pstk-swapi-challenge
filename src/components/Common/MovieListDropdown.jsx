import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PreLoader from '../Common/PreLoader';
import { getMovies, selectMovie, getMovie } from '../../actions';
import { MovieListDropdown as StyledMovieListDropdown } from '../../styles';
import { toast } from 'react-toastify';

const MovieListDropdown = ({
  movies,
  selectMovie,
  getMovies,
  getMovie,
  loading,
  error
}) => {
  const [movieValue, setMovieValue] = useState('');
  console.log(loading, 'llll');
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
      <select value={movieValue} onChange={handleChange}>
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
      </select>
    );
  }
  if (loading) {
    return <PreLoader />;
  }

  if (error) {
    return toast.error(error);
  }

  return (
    <StyledMovieListDropdown>
      <h1>Star Wars</h1>

      {dropDownItems}
    </StyledMovieListDropdown>
  );
};

MovieListDropdown.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired
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
