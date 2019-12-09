import React from 'react';
import PropTypes from 'prop-types';

import SortArrow from './SortArrow';
import Character from '../Characters/Character';
import {
  calculateInches,
  calculateFeet,
  formatHeight,
  formatGender,
  calculateHeights
} from '../../utils';

const Table = props => {
  const {
    characters,
    nameOrder,
    genderOrder,
    heightOrder,
    stateCharacters,
    sortNameField,
    sortGenderField,
    sortHeightField,
    setNameOrder,
    setGenderOrder,
    setHeightOrder,
    setStateCharacters
  } = props;

  let totalHeight = calculateHeights(characters);
  if (stateCharacters.length > 0) {
    totalHeight = calculateHeights(stateCharacters);
  }

  return (
    <table className="fl-table">
      <thead>
        <tr>
          <th
            onClick={() =>
              sortNameField(
                nameOrder,
                setNameOrder,
                setGenderOrder,
                setHeightOrder,
                setStateCharacters,
                characters
              )
            }
            className="toggle name"
          >
            Name{' '}
            {nameOrder !== undefined ? <SortArrow order={nameOrder} /> : ''}
          </th>
          <th
            onClick={() =>
              sortGenderField(
                genderOrder,
                setGenderOrder,
                setNameOrder,
                setHeightOrder,
                setStateCharacters,
                characters
              )
            }
            className="toggle gender"
          >
            Gender{' '}
            {genderOrder !== undefined ? <SortArrow order={genderOrder} /> : ''}
          </th>
          <th
            onClick={() =>
              sortHeightField(
                heightOrder,
                setHeightOrder,
                setGenderOrder,
                setNameOrder,
                setStateCharacters,
                characters
              )
            }
            className="toggle height"
          >
            Height (cm){' '}
            {heightOrder !== undefined ? <SortArrow order={heightOrder} /> : ''}
          </th>
        </tr>
      </thead>
      <tbody>
        {stateCharacters.length > 0
          ? stateCharacters.map(character => {
              return (
                <Character
                  key={character.name}
                  name={character.name}
                  gender={formatGender(character.gender, stateCharacters)}
                  height={formatHeight(character.height)}
                />
              );
            })
          : '' ||
            characters.map(character => {
              return (
                <Character
                  key={character.name}
                  name={character.name}
                  gender={formatGender(character.gender, characters)}
                  height={formatHeight(character.height)}
                />
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
  );
};

export default Table;

Table.propTypes = {
  characters: PropTypes.array.isRequired,
  nameOrder: PropTypes.number,
  genderOrder: PropTypes.number,
  heightOrder: PropTypes.number,
  stateCharacters: PropTypes.array.isRequired,
  sortNameField: PropTypes.func.isRequired,
  sortGenderField: PropTypes.func.isRequired,
  sortHeightField: PropTypes.func.isRequired,
  setNameOrder: PropTypes.func.isRequired,
  setGenderOrder: PropTypes.func.isRequired,
  setHeightOrder: PropTypes.func.isRequired,
  setStateCharacters: PropTypes.func.isRequired
};
