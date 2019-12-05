import React from 'react';

const SortArrow = ({ order }) => {
  if (order === 1) {
    return <span>&uarr;</span>;
  } else if (order === 0) {
    return <span>&darr;</span>;
  } else {
    return '';
  }
};

export default SortArrow;
