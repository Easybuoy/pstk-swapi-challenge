import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import CharacterList from '../Characters/CharacterList';
import PreLoader from '../Common/PreLoader';

import { MovieListDropdown as StyledMovieListDropdown } from '../../styles';
import Select from './Select';
import {
  getMovieFromLocalStorage,
  getMovieListFromLocalStorage
} from '../../utils';
import {
  requestFromAPI,
  addMovieListToLocalStorage,
  addMovieDataToLocalStorage
} from '../../utils';

export const MovieListDropdown = () => {
  const [movieValue, setMovieValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovieValue('Select Star Wars Movie');
    const existingMovieListInLocalStorage = getMovieListFromLocalStorage();
    if (existingMovieListInLocalStorage.length > 0) {
      setMovies(existingMovieListInLocalStorage);
    } else {
      //we could not find movieList in localstorage, thus get from api

      requestFromAPI('https://swapi.co/api/films', 'GET')
        .then(res => {
          addMovieListToLocalStorage(res.results);
          setMovies(res.results);
          console.log(res.results);
        })
        .catch(err => {
          console.log(err);
          if (err.response) {
            alert(err.response.data.detail);
          } else {
            alert(err.message);
          }
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    const { title, url } = JSON.parse(value);
    setMovieValue(value);

    // check if movie exist in localstorage
    const existingMovieInLocalStorage = getMovieFromLocalStorage(title);
    if (existingMovieInLocalStorage.length > 0) {
      // we found the movie in localstorage
      setCharacters(existingMovieInLocalStorage[0].characters);
      setMovie(existingMovieInLocalStorage[0].movie);
    } else {
      //we could not find movie in localstorage, thus get from api
      // getMovie(url);
      requestFromAPI(url, 'GET')
        .then(res => {
          console.log(res);
          setMovie(res);

          Promise.all(
            res.characters.map(url =>
              requestFromAPI(url, 'GET').then(data => data)
            )
          )
            .then(res => {
              addMovieDataToLocalStorage(movie, res);
              setCharacters(res);
            })
            .catch(err => {
              if (err.response) {
                alert(err.response.data.detail);
              } else {
                alert(err.message);
              }
            });

          // dispatch(getCharacter(res));
        })
        .catch(err => {
          if (err.response) {
            alert(err.response.data.detail);
          } else {
            alert(err.message);
          }
        });
    }
  };

  let dropDownItems = '';

  if (movies.length > 0) {
    dropDownItems = (
      <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
        <Select
          items={movies.sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
          )}
          value={movieValue}
          onChange={handleChange}
          defaultValue="Select Star Wars Movie"
        />
        <CharacterList characters={characters} movie={movie} />
      </div>
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

// MovieListDropdown.propTypes = {
//   getMovies: PropTypes.func.isRequired,
//   selectMovie: PropTypes.func.isRequired,
//   getMovie: PropTypes.func.isRequired,
//   setCharacters: PropTypes.func.isRequired,
//   setMovie: PropTypes.func.isRequired
// };


export default MovieListDropdown;
