import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setCharacters } from '../../actions';
import { Character as StyledCharacter } from '../../styles';
import {
  formatGender,
  calculateHeights,
  formatHeight,
  sortHeight,
  sortName,
  calculateFeet,
  calculateInches
} from '../../utils';
import PreLoader from '../Common/PreLoader';

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

const Character = ({ characters, setCharacters }) => {
  const [heightOrder, setHeightOrder] = useState(undefined);
  const [nameOrder, setNameOrder] = useState(undefined);

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
    setCharacters([]);
    setCharacters(sorted);
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
    setCharacters([]);
    setCharacters(sorted);
  };

  if (characters.length > 0) {
    const totalHeight = calculateHeights(characters);
    return (
      <StyledCharacter>
        <table className="fl-table">
          <thead>
            <tr>
              <th onDoubleClick={() => sortNameField(characters)}>
                Name {sortArrow(nameOrder)}
              </th>
              <th>Gender</th>
              <th onDoubleClick={() => sortHeightField(characters)}>
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
              <td>{`Total: ${totalHeight}cm (${calculateFeet(
                totalHeight
              )}ft/${calculateInches(totalHeight)}in)`}</td>
            </tr>
          </tbody>
        </table>
      </StyledCharacter>
    );
  }

  return <PreLoader />;
};

Character.propTypes = {
  loading: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  characters: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
  characters: state.swapi.characters
});

export default connect(
  mapStateToProps,
  { setCharacters }
)(Character);
