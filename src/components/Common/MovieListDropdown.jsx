import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovies } from '../../actions';

const MovieListDropdown = props => {
  return (
    <div>
      <select onClick={props.getMovies}>
        <option>Me</option>
      </select>
    </div>
  );
};

MovieListDropdown.propTypes = {
  loading: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getMovies }
)(MovieListDropdown);
