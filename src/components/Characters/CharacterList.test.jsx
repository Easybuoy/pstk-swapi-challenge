import React from 'react';
import { shallow, mount } from 'enzyme';

import mock from '../../__mocks__/mock';
import { CharacterList } from './CharacterList';

const { getMovieMock } = mock;
describe('<CharacterList />', () => {
  let props = {
    movie: getMovieMock,
    selectedMovie: ''
  };

  it('renders the CharacterList component correctly', () => {
    const wrapper = mount(<CharacterList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the CharacterList component correctly', () => {
    props = {
      movie: { name: 'Hi', characters: [{ name: 'Ezekiel' }] },
      selectedMovie: ''
    };
    const wrapper = mount(<CharacterList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the CharacterList component correctly', () => {
    props = {
      movie: {},
      selectedMovie: ''
    };
    const wrapper = mount(<CharacterList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
