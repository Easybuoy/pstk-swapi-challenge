import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MovieDetails from '../Common/MovieDetails';
import PreLoader from '../Common/PreLoader';
import StarWarsImage from '../../assets/images/star-wars.png';
import { CharacterList as StyledCharacterList } from '../../styles';
import Character from './Character';
import Select from '../Common/Select';
import {
  formatGender,
  calculateHeights,
  formatHeight,
  sortHeight,
  sortName,
  calculateFeet,
  calculateInches,
  sortGender
} from '../../utils';

export const sortArrow = order => {
  switch (order) {
    case 0:
      return <span>&darr;</span>;
    case 1:
      return <span>&uarr;</span>;
    default:
      return '';
  }
};

export const CharacterList = ({ movie, characters }) => {
  const [heightOrder, setHeightOrder] = useState(undefined);
  const [nameOrder, setNameOrder] = useState(undefined);
  const [genderValue, setGenderValue] = useState('Filter Gender');
  const [stateCharacters, setStateCharacters] = useState([]);

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
    }

    if (nameOrder === 1) {
      sorted = sortName(array, 'dsc');
      setNameOrder(0);
    }
    // setCharacters([]);
    setStateCharacters(sorted);
  };

  const sortHeightField = array => {
    let sorted = [];
    if (heightOrder === 0 || heightOrder === undefined) {
      sorted = sortHeight(array, 'asc');
      setHeightOrder(1);
    }

    if (heightOrder === 1) {
      sorted = sortHeight(array, 'dsc');
      setHeightOrder(0);
    }
    // setCharacters([]);
    setStateCharacters(sorted);
  };

  const sortGenderField = (array, letter) => {
    const sorted = sortGender(array, letter);
    setStateCharacters(sorted);
  };

  const onSelectChange = e => {
    const { title } = JSON.parse(e.target.value);

    setGenderValue(e.target.value);
    sortGenderField(stateCharacters, title);
  };

  if (characters) {
    const totalHeight = calculateHeights(characters);
    const items = [
      { title: 'ALL' },
      { title: 'MALE' },
      { title: 'FEMALE' },
      { title: 'HERMAPHODITE' },
      { title: 'N/A' }
    ];

    return (
      <StyledCharacterList>
        <MovieDetails movie={movie} />

        <Select
          defaultValue="Filter Gender"
          value={genderValue}
          onChange={onSelectChange}
          items={items}
        />

        <table className="fl-table">
          <thead>
            <tr>
              <th
                onClick={() => sortNameField(characters)}
                className="toggle name"
              >
                Name {sortArrow(nameOrder)}
              </th>
              <th>Gender</th>
              <th
                onClick={() => sortHeightField(characters)}
                className="toggle height"
              >
                Height {sortArrow(heightOrder)}
              </th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character, i) => {
              return (
                <tr key={character.name}>
                  <td>{character.name}</td>
                  <td>{formatGender(character.gender)}</td>
                  <td>{formatHeight(character.height)}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td className="total">{`Total: ${totalHeight}cm (${calculateFeet(
                totalHeight
              )}ft/${calculateInches(totalHeight)}in)`}</td>
            </tr>
          </tbody>
        </table>
        {/* <Character movie={movie} /> */}
      </StyledCharacterList>
    );
  }

  return <PreLoader />;
};

CharacterList.propTypes = {
  movie: PropTypes.object.isRequired,
  selectedMovie: PropTypes.string.isRequired
};

export default CharacterList;
