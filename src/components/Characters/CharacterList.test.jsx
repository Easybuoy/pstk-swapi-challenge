import React from 'react';
import { mount } from 'enzyme';
import mock from '../../__mocks__/mock';
import { CharacterList } from './CharacterList';

const { getMovieMock, getCharactersMock } = mock;
describe('<CharacterList />', () => {
  let props = {
    movie: getMovieMock,
    characters: getCharactersMock,
    loading: true
  };

  it('renders the CharacterList component correctly', () => {
    const wrapper = mount(<CharacterList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
