import React from 'react';
import { Triple } from 'react-preloading-component';
import styled from 'styled-components';

const StyledPreLoader = styled.div`
  text-align: center;
  margin: 5rem 0;
`;

export default function PreLoader() {
  return (
    <StyledPreLoader>
      <Triple color="#CC0000" size={80} />
    </StyledPreLoader>
  );
}
