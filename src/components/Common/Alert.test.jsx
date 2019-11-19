import React from 'react';
import { shallow } from 'enzyme';

import Alert from './Alert';

describe('<Alert />', () => {
  const props = {
    message: 'Error'
  };

  it('renders the Alert component correctly', () => {
    const wrapper = shallow(<Alert {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
