import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StarWarsImage from '../../assets/images/star-wars.png';

const CharacterList = ({ selectedMovie }) => {
  console.log(selectedMovie);
  if (!selectedMovie) {
    console.log('eee');
    return (
      <div>
        <img src={StarWarsImage} style={{width: '500px', height: '500px'}} alt="Star Wars" />
      </div>
    );
  }
  return <div>Character List</div>;
};

CharacterList.propTypes = {
  loading: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
  movies: state.swapi.movies,
  selectedMovie: state.swapi.selectedMovie
});

export default connect(
  mapStateToProps
  // { getMovies }
)(CharacterList);
