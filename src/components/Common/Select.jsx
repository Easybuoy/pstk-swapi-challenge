import React from 'react';
import { Select as StyledSelect } from '../../styles';
const Select = ({ value, onChange, defaultValue, items }) => {
  return (
    <StyledSelect value={value} onChange={onChange}>
      <option defaultValue={defaultValue} disabled>
        {defaultValue}
      </option>
      {items.map(item => (
        <option
          key={item.title}
          value={JSON.stringify({ title: item.title, url: item.url })}
          me={item.title}
          name={item.title}
        >
          {item.title}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
