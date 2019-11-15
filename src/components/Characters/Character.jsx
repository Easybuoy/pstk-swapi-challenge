import React from 'react';

function Character({ name, gender, height }) {
  return (
    // <div>
    <tr>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{height}</td>
    </tr>
    // </div>
  );
}

export default Character;
