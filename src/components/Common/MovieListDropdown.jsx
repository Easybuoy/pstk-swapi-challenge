import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PreLoader from '../Common/PreLoader';
import { getMovies, selectMovie, getMovie } from '../../actions';
import {
  MovieListDropdown as StyledMovieListDropdown,
  // Select
} from '../../styles';
import Select from './Select';

export const MovieListDropdown = ({
  movies,
  selectMovie,
  getMovies,
  getMovie
}) => {
  const [movieValue, setMovieValue] = useState('');

  useEffect(() => {
    getMovies();
    setMovieValue('Select Star Wars Movie');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    const {title, url} = JSON.parse(value);
    console.log()
    setMovieValue(title);
    selectMovie(title);
    getMovie(url);
  };

  let dropDownItems = '';

  if (movies.length > 0) {
    dropDownItems = (
      // <Select value={movieValue} onChange={handleChange}>
      //   <option value="Select Star Wars Movie" disabled>
      //     Select Star Wars Movie
      //   </option>

      //   {movies
      //     .sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
      //     .map(movie => (
      //       <option key={movie.title} value={movie.url}>
      //         {movie.title}
      //       </option>
      //     ))}
      // </Select>
      <Select
        items={movies.sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        )}
        value={movieValue}
        onChange={handleChange}
        defaultValue={movieValue}
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
