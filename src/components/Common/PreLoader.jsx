import React from 'react';
import { Pulse } from 'react-preloading-component';
import styled from 'styled-components';

const StyledPreLoader = styled.div`
  text-align: center;
  margin: 5rem 0;
`;

export default function PreLoader() {
  return (
    <StyledPreLoader>
      <Pulse color="#f7e523" size={20} />
    </StyledPreLoader>
  );
}
