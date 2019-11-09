import React from 'react'

import { Navigation as StyledNavigation } from '../../styles';
import logo from '../../assets/images/star-wars.png'

function Navigation() {
    return (
        <StyledNavigation>
            <img src={logo} alt="star wars" />
        </StyledNavigation>
    )
}

export default Navigation
