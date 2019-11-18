import React, { useEffect, useState } from 'react';

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
  const [characterLoading, setCharacterLoading] = useState(false);
  const [disableSelect, setdisableSelect] = useState(false);

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
        })
        .catch(err => {
          if (err.response) {
            alert(err.response.data.detail);
          } else {
            alert(err.message);
          }
        });
    }
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    const { title, url } = JSON.parse(value);
    setMovieValue(value);
    console.log('aa')
    setdisableSelect(true);

    // check if movie exist in localstorage
    const existingMovieInLocalStorage = getMovieFromLocalStorage(title);
    if (existingMovieInLocalStorage.length > 0) {
      // we found the movie in localstorage
      setCharacters(existingMovieInLocalStorage[0].characters);
      setMovie(existingMovieInLocalStorage[0].movie);
      setdisableSelect(false);
    } else {
      //we could not find movie in localstorage, thus get from api
      setCharacterLoading(true);
      requestFromAPI(url, 'GET')
        .then(mov => {
          setMovie(mov);

          Promise.all(
            mov.characters.map(url =>
              requestFromAPI(url, 'GET').then(data => data)
            )
          )
            .then(res => {
              setCharacters(res);
              setCharacterLoading(false);
              addMovieDataToLocalStorage(mov, res);
              setdisableSelect(false);
            })
            .catch(err => {
              if (err.response) {
                alert(err.response.data.detail);
              } else {
                alert(err.message);
              }
            });
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
          disabled={disableSelect}
        />
        <CharacterList
          characters={characters}
          movie={movie}
          loading={characterLoading}
        />
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

export default MovieListDropdown;
