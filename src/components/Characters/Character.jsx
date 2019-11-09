import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setCharacters } from '../../actions';
import StyledCharacter from './StyledCharacter';
import {
  formatGender,
  calculateHeights,
  formatHeight,
  sortHeight,
  sortName
} from '../../utils';
import PreLoader from '../Common/PreLoader';

const Character = ({ characters, setCharacters }) => {
  const [heightOrder, setHeightOrder] = useState(0);
  const [nameOrder, setNameOrder] = useState(0);

  const sortNameField = array => {
    let sorted = [];
    if (nameOrder === 0) {
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
    if (heightOrder === 0) {
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
    console.log(characters);
    return (
      <StyledCharacter>
        <table className="fl-table">
          <thead>
            <tr>
              <th onDoubleClick={() => sortNameField(characters)}>Name</th>
              <th>Gender</th>
              <th onDoubleClick={() => sortHeightField(characters)}>Height</th>
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
              <td>{`Total: ${calculateHeights(characters)}`}</td>
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
