import React from 'react';

export const Character = ({ name, gender, height }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{height}</td>
    </tr>
  );
};

export default Character;
