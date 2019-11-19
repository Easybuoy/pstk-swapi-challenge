import React, { useState, useEffect } from 'react';
import {Alert as StyledAlert} from '../../styles';


const Alert = ({ message }) => {
  const [hideMessage, setHideMessage] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHideMessage('none');
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <StyledAlert>
      <div className="toast" style={{ display: hideMessage }}>
        <p>{message}</p>
      </div>
    </StyledAlert>
  );
};

export default Alert;
