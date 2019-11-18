/* eslint-disable jsx-a11y/no-distracting-elements */

import React from 'react';
import PropTypes from 'prop-types';

import { OpeningCrawl as StyledOpeningCrawl } from '../../styles';
function OpeningCrawl({ opening_crawl }) {
  return (
    <StyledOpeningCrawl>
      <marquee behavior="scroll" direction="left">
        {opening_crawl}
      </marquee>
    </StyledOpeningCrawl>
  );
}

OpeningCrawl.propTypes = {
  opening_crawl: PropTypes.string.isRequired
};
export default OpeningCrawl;
