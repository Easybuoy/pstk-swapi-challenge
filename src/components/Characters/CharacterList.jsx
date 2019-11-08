import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CharacterList = () =>{
    return (
        <div>
            Character List 
        </div>
    )
}

CharacterList.propTypes = {
    loading: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = state => ({
    loading: state.loading,
    error: state.error,
    movies: state.swapi.movies,
    selectedMovie: state.swapi.selectedMovie
  });
  
  export default connect(
    mapStateToProps,
    // { getMovies }
  )(CharacterList);

