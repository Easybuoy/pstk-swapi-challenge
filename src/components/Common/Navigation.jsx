import React from 'react';

import { Navigation as StyledNavigation } from '../../styles';
import logo from '../../assets/images/star-wars.png';

function Navigation() {
  return (
    <StyledNavigation>
      <div>
        <a href="/">
          <img src={logo} alt="star wars" />
        </a>
      </div>
    </StyledNavigation>
  );
}

export default Navigation;
