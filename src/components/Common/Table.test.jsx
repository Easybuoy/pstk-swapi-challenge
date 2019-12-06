import React from 'react';
import { shallow } from 'enzyme';

import mock from '../../__mocks__/mock';
import Table from './Table';
const { getCharactersMock } = mock;
describe('<Table />', () => {
  let props = {
    characters: getCharactersMock,
    nameOrder: jest.mock(),
    genderOrder: jest.mock(),
    heightOrder: jest.mock(),
    stateCharacters: getCharactersMock,
    sortNameField: jest.fn(),
    sortGenderField: jest.fn(),
    sortHeightField: jest.fn()
  };

  it('renders the Table component correctly', () => {
    const wrapper = shallow(<Table {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
