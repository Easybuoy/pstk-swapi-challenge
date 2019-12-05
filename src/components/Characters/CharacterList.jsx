import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MovieDetails from '../Common/MovieDetails';
import PreLoader from '../Common/PreLoader';
import Table from '../Common/Table';
import StarWarsImage from '../../assets/images/star-wars.png';
import { CharacterList as StyledCharacterList } from '../../styles';
import Select from '../Common/Select';
import {
  sortHeight,
  sortName,
  filterGender,
  sortGender,
  genderFilterFromCharacters
} from '../../utils';

export const CharacterList = ({ movie, characters, loading }) => {
  const [heightOrder, setHeightOrder] = useState(undefined);
  const [nameOrder, setNameOrder] = useState(undefined);
  const [genderOrder, setGenderOrder] = useState(undefined);
  const [genderValue, setGenderValue] = useState('Filter Gender');
  const [stateCharacters, setStateCharacters] = useState([]);
  const [movieInState, setMovieInState] = useState({});
  const [genderFilter, setGenderFilter] = useState([]);

  useEffect(() => {
    const filters = genderFilterFromCharacters(characters);
    setGenderFilter(filters);
    if (characters.length > 0 && movieInState.title !== movie.title) {
      setStateCharacters([]);
      setMovieInState(movie);
      setGenderValue('Filter Gender');
    }
  }, [characters, movie, movieInState.title, stateCharacters.length]);

  if (loading) {
    return <PreLoader />;
  }

  if (characters.length === 0) {
    return (
      <StyledCharacterList>
        <img src={StarWarsImage} alt="Star Wars" />
      </StyledCharacterList>
    );
  }

  const sortNameField = array => {
    let sorted = [];
    if (nameOrder === 0 || nameOrder === undefined) {
      sorted = sortName(array, 'asc');
      setNameOrder(1);
      setGenderOrder(undefined);
      setHeightOrder(undefined);
    }

    if (nameOrder === 1) {
      sorted = sortName(array, 'dsc');
      setNameOrder(0);
      setGenderOrder(undefined);
      setHeightOrder(undefined);
    }
    setStateCharacters(sorted);
  };

  const sortHeightField = array => {
    let sorted = [];
    if (heightOrder === 0 || heightOrder === undefined) {
      sorted = sortHeight(array, 'asc');
      setHeightOrder(1);
      setGenderOrder(undefined);
      setNameOrder(undefined);
    }

    if (heightOrder === 1) {
      sorted = sortHeight(array, 'dsc');
      setHeightOrder(0);
      setGenderOrder(undefined);
      setNameOrder(undefined);
    }

    setStateCharacters(sorted);
  };

  const sortGenderField = array => {
    let sorted = [];
    if (genderOrder === 0 || genderOrder === undefined) {
      sorted = sortGender(array, 'asc');
      setGenderOrder(1);
      setNameOrder(undefined);
      setHeightOrder(undefined);
    }

    if (genderOrder === 1) {
      sorted = sortGender(array, 'dsc');
      setGenderOrder(0);
      setNameOrder(undefined);
      setHeightOrder(undefined);
    }

    setStateCharacters(sorted);
  };

  const filterGenderField = (array, letter) => {
    const sorted = filterGender(array, letter);
    setStateCharacters(sorted);
  };

  const onSelectChange = e => {
    const { title } = JSON.parse(e.target.value);

    setGenderValue(e.target.value);
    filterGenderField(characters, title);
  };

  if (characters) {
    

    if (genderValue !== 'Filter Gender' && stateCharacters.length === 0) {
      return (
        <StyledCharacterList>
          <MovieDetails movie={movie} />

          <Select
            defaultValue="Filter Gender"
            value={genderValue}
            onChange={onSelectChange}
            items={genderFilter}
            disabled={false}
          />
          <h2>No character ound with search criteria</h2>
        </StyledCharacterList>
      );
    }
    return (
      <StyledCharacterList>
        <MovieDetails movie={movie} />

        <Select
          defaultValue="Filter Gender"
          value={genderValue}
          onChange={onSelectChange}
          items={genderFilter}
          disabled={false}
        />
        <Table
          characters={characters}
          sortNameField={sortNameField}
          sortHeightField={sortHeightField}
          sortGenderField={sortGenderField}
          stateCharacters={stateCharacters}
          genderOrder={genderOrder}
          nameOrder={nameOrder}
          heightOrder={heightOrder}
        />
      </StyledCharacterList>
    );
  }

  return <PreLoader />;
};

CharacterList.propTypes = {
  movie: PropTypes.object.isRequired,
  characters: PropTypes.array.isRequired
};

export default CharacterList;
