import React from 'react';
import { shallow } from 'enzyme';

import SortArrow from './SortArrow';

describe('<SortArrow />', () => {
  let props = {
    order: 0
  };

  it('renders the SortArrow component correctly', () => {
    const wrapper = shallow(<SortArrow {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the SortArrow component correctly', () => {
    props.order = 1;
    const wrapper = shallow(<SortArrow {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the SortArrow component correctly', () => {
    props.order = '';
    const wrapper = shallow(<SortArrow {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
