import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import StarWarsImage from '../../assets/images/star-wars.png';
import Character from './Character';

const CharacterList = ({ selectedMovie, movie }) => {
  if (!selectedMovie) {
    return (
      <div>
        <img
          src={StarWarsImage}
          style={{ width: '500px', height: '500px' }}
          alt="Star Wars"
        />
      </div>
    );
  }
  if (movie.characters) {
    return (
      <div>
        Character List
        <Character characterUrls={movie.characters} />
      </div>
    );
  }

  return <p>Loading</p>;
};

CharacterList.propTypes = {
  loading: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  selectedMovie: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
  movie: state.swapi.movie,
  selectedMovie: state.swapi.selectedMovie
});

export default connect(mapStateToProps)(CharacterList);
