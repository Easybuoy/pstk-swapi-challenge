import React from 'react';
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
    sortHeightField
  } = props;

  let totalHeight = calculateHeights(characters);
  if (stateCharacters.length > 0) {
    totalHeight = calculateHeights(stateCharacters);
  }

  return (
    <table className="fl-table">
      <thead>
        <tr>
          <th onClick={() => sortNameField(characters)} className="toggle name">
            Name{' '}
            {nameOrder !== undefined ? <SortArrow order={nameOrder} /> : ''}
          </th>
          <th
            onClick={() => sortGenderField(characters)}
            className="toggle gender"
          >
            Gender{' '}
            {genderOrder !== undefined ? <SortArrow order={genderOrder} /> : ''}
          </th>
          <th
            onClick={() => sortHeightField(characters)}
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
