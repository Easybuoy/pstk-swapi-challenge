import React from 'react';
import { Pulse } from 'react-preloading-component';

import { PreLoader as StyledPreLoader } from '../../styles'


export default function PreLoader() {
  return (
    <StyledPreLoader>
      <Pulse color="#f7e523" size={20} />
    </StyledPreLoader>
  );
}
