import React from 'react';
import OpeningCrawl from './OpeningCrawl';
import PropTypes from 'prop-types';

import { MovieDetails as StyledMovieDetails } from '../../styles';

function MovieDetails({ movie }) {
  return (
    <StyledMovieDetails>
      <div className="content">

        <OpeningCrawl opening_crawl={movie.opening_crawl} />
      </div>
    </StyledMovieDetails>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDetails;
