import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovies } from '../../actions';

const MovieListDropdown = props => {
  console.log(props.movies);
  const [movieValue, setMovieValue] = useState('');
  console.log(movieValue);
  useEffect(() => {
    // Update the document title using the browser API
    // props.getMovies();
    setMovieValue('Select Movie');
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
        <option value="me" onChange={handleChange}>
          Me
        </option>
      </select>
    </div>
  );
};

MovieListDropdown.propTypes = {
  loading: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading,
  errors: state.errors,
  movies: state.swapi.movies
});

export default connect(
  mapStateToProps,
  { getMovies }
)(MovieListDropdown);
