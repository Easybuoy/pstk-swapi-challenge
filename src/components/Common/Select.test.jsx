import React from 'react';
import { shallow } from 'enzyme';

import mock from '../../__mocks__/mock';
import { Select } from './Select';

const { getItemsMock } = mock;
describe('<MovieListDropdown />', () => {
  const props = {
    value: jest.mock(),
    onChange: jest.fn(),
    defaultValue: jest.mock(),
    items: getItemsMock
  };

  it('renders the MovieListDropdown component correctly', () => {
    const wrapper = shallow(<Select {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the mock onChange function', () => {
    const wrapper = shallow(<Select {...props} />);
    const event = {
      target: {
        name: 'pollName',
        value: JSON.stringify({ title: '', url: '' })
      }
    };
    wrapper.find('.select').simulate('change', event);
    expect(props.onChange).toBeCalled();
  });
});
