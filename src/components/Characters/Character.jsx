import React from 'react';

const Character = ({ name, gender, height }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{height}</td>
    </tr>
  );
};

export default Character;
