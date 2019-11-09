import React from 'react';
import { shallow } from 'enzyme';

import PreLoader from './PreLoader';

describe('<PreLoader />', () => {
  it('renders the PreLoader component correctly', () => {
    const wrapper = shallow(<PreLoader />);
    expect(wrapper).toMatchSnapshot();
  });
});
