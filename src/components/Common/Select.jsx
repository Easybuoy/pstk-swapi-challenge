import React from 'react';
import { Select as StyledSelect } from '../../styles';
function Select({ value, onChange, defaultValue, items }) {
  console.log(items);
  return (
    <StyledSelect value={value} onChange={onChange}>
      <option defaultValue={defaultValue} disabled>
        {defaultValue}
      </option>
      {items.map(item => (
        <option key={item.title} value={[item.url, item.title] || item.title} me={item.title} name={item.title}>
          {item.title}
        </option>
      ))}
    </StyledSelect>
  );
}
// e => sortGenderField(stateCharacters, e.target.value)
{
  /* <select
  value={genderValue}
  onChange={e => sortGenderField(stateCharacters, e.target.value)}
>
  <option defaultValue="Select Gender" disabled>
    Filter
  </option>
  <option value="M">M</option>
  <option value="F">F</option>
</select>; */
}
export default Select;
