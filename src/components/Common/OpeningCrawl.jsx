/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import { OpeningCrawl as StyledOpeningCrawl } from '../../styles';

function OpeningCrawl({opening_crawl}) {
  return (
    <StyledOpeningCrawl >
        <marquee behavior="scroll" direction="left">
          {opening_crawl}
        </marquee>
     

    </StyledOpeningCrawl>
  );
}

export default OpeningCrawl;
