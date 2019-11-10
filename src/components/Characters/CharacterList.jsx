import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PreLoader from '../Common/PreLoader';
import StarWarsImage from '../../assets/images/star-wars.png';
import { CharacterList as StyledCharacterList } from '../../styles';
import Character from './Character';

export const CharacterList = ({ selectedMovie, movie }) => {
  if (!selectedMovie) {
    return (
      <StyledCharacterList>
        <img src={StarWarsImage} alt="Star Wars" />
      </StyledCharacterList>
    );
  }
  if (movie.characters) {
    return (
      <StyledCharacterList>
        <Character movie={movie} />
      </StyledCharacterList>
    );
  }

  return <PreLoader />;
};

CharacterList.propTypes = {
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
