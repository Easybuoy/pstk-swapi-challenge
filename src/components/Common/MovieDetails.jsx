import React from 'react';
import OpeningCrawl from './OpeningCrawl';

import { MovieDetails as StyledMovieDetails } from '../../styles';

function MovieDetails({ movie }) {
  return (
    <StyledMovieDetails>
      <OpeningCrawl opening_crawl={movie.opening_crawl} />
    </StyledMovieDetails>
  );
}

export default MovieDetails;
