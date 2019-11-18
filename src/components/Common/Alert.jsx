import React from 'react';
import styled from 'styled-components';

const StyledAlert = styled.div`
  .toast {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 250px;
    border-radius: 4px;
    box-shadow: #310808 1px 1px 5px;
    background-color: rgba(177, 7, 15, 0.78);
    padding: 10px;
    color: #f5bfbf;

    opacity: 1;
    animation: toast 500ms cubic-bezier(0.23, 0.82, 0.16, 1.46);
    animation-iteration-count: 1;
  }

  @keyframes toast {
    0% {
      opacity: 0;
      transform: translateY(200px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

function Alert() {
  let hideMessage = false;

  setTimeout(() => {
    hideMessage = true;
  }, 4000);

  return (
    <StyledAlert>
      <div class="toast" style={{ display: hideMessage }}>
        <p>Your message</p>
      </div>
    </StyledAlert>
  );
}

export default Alert;
