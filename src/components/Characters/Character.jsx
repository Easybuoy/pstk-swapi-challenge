import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCharacter } from '../../actions';

const Character = ({ characterUrls, getCharacter, characters }) => {
//   console.log(characters);
//   useEffect(() => {
//     getCharacter(characterUrls);

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

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

// Character.propTypes = {
//   loading: PropTypes.object.isRequired,
//   error: PropTypes.object.isRequired,
//   movie: PropTypes.object.isRequired,
//   movies: PropTypes.array.isRequired,
//   selectedMovie: PropTypes.string.isRequired
// };

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
  movies: state.swapi.movies,
  movie: state.swapi.movie,
  selectedMovie: state.swapi.selectedMovie,
  characters: state.swapi.characters
});

export default connect(
  mapStateToProps,
  { getCharacter }
)(Character);
