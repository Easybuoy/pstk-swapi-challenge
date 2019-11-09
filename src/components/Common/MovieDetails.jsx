import React from 'react';
import OpeningCrawl from './OpeningCrawl';
import PropTypes from 'prop-types';

import { MovieDetails as StyledMovieDetails } from '../../styles';

function MovieDetails({ movie }) {
  return (
    <StyledMovieDetails>
      <div className="content">
        <div className="content-details">
          <div className="item">
            <h4>Title</h4>
            <p>{movie.title}</p>
          </div>
          <div className="item">
            <h4>Director</h4>
            <p>{movie.director}</p>
          </div>
          <div className="item">
            <h4>Producer</h4>
            <p>{movie.producer}</p>
          </div>
          <div className="item">
            <h4>Release Date</h4>
            <p>{movie.release_date}</p>
          </div>
        </div>
        <OpeningCrawl opening_crawl={movie.opening_crawl} />
      </div>
    </StyledMovieDetails>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDetails;
