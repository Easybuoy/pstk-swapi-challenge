import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import StyledCharacter from './StyledCharacter';
import { formatGender, calculateHeights, formatHeight } from '../../utils';
import PreLoader from '../Common/PreLoader';

const Character = ({ characters }) => {
  if (characters.length > 0) {
    console.log(characters);
    return (
      <StyledCharacter>
        <table className="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Height</th>
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
              <td>{calculateHeights(characters)}</td>
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
  characters: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired,
  selectedMovie: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
  characters: state.swapi.characters
});

export default connect(mapStateToProps)(Character);
