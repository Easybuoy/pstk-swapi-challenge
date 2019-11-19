import React, { useEffect, useState } from 'react';

import CharacterList from '../Characters/CharacterList';
import PreLoader from './PreLoader';
import Alert from './Alert';
import { MovieListDropdown as StyledMovieListDropdown } from '../../styles';
import Select from './Select';
import {
  getMovieFromLocalStorage,
  requestFromAPI,
  addMovieDataToLocalStorage
} from '../../utils';

export const MovieList = () => {
  const [movieValue, setMovieValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [movie, setMovie] = useState({});
  const [characterLoading, setCharacterLoading] = useState(false);
  const [disableSelect, setdisableSelect] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setMovieValue('Select Star Wars Movie');
    requestFromAPI('https://swapi.co/api/films', 'GET')
      .then(res => {
        setMovies(res.results);
      })
      .catch(err => {
        if (err.response) {
          setError(err.response.data.detail);
        } else {
          setError(err.message);
        }
      });
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    const { title, url } = JSON.parse(value);
    setMovieValue(value);
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
                setError(err.response.data.detail);
              } else {
                setError(err.message);
              }
            });
        })
        .catch(err => {
          if (err.response) {
            setError(err.response.data.detail);
          } else {
            setError(err.message);
          }
        });
    }
  };

  let dropDownItems = '';

  if (error) {
    return <Alert message={error} />
  }

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

export default MovieList;
