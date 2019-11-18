import React from 'react';
import { Select as StyledSelect } from '../../styles';

export const Select = ({ value, onChange, defaultValue, items, disabled }) => {
  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      className="select"
      disabled={disabled}
    >
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
