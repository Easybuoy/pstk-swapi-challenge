import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovies } from '../../actions';

const MovieListDropdown = props => {
  const [movieValue, setMovieValue] = useState('');

  const { movies } = props;
  console.log(movieValue);
  console.log(movies);
  useEffect(() => {
    props.getMovies();
    setMovieValue('Select Movie');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    setMovieValue(e.target.value);
  };

  return (
    <div>
      <select value={movieValue} onChange={handleChange}>
        <option value="Select Movie" disabled>
          Select Movie
        </option>

        {movies
          .sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
          .map((movie, i) => (
            <option
              key={movie.title}
              value={movie.episode_id}
              onChange={handleChange}
            >
              {movie.title}
            </option>
          ))}
      </select>
    </div>
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
  movies: state.swapi.movies
});

export default connect(
  mapStateToProps,
  { getMovies }
)(MovieListDropdown);
