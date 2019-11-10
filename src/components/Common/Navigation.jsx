import React from 'react';

import { Navigation as StyledNavigation } from '../../styles';
import logo from '../../assets/images/star-wars.png';

function Navigation() {
  return (
    <StyledNavigation>
      <div>
        <img src={logo} alt="star wars" />
      </div>
    </StyledNavigation>
  );
}

export default Navigation;
