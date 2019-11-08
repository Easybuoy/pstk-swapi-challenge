import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Character = ({ characters }) => {
  if (characters.length > 0) {
    return (
      <div>
        {characters.map((character, i) => {
          return (
            <div key={character.name}>
              <p>{character.name}</p>
            </div>
          );
        })}
      </div>
    );
  }

  return <div>Loading...</div>;
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
