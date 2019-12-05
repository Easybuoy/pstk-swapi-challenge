import React from 'react';
import { shallow } from 'enzyme';

import SortArrow from './SortArrow';

describe('<SortArrow />', () => {
  it('renders the SortArrow component correctly', () => {
    const wrapper = shallow(<SortArrow />);
    expect(wrapper).toMatchSnapshot();
  });
});
