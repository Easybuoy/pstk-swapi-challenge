import React from 'react';
import { shallow } from 'enzyme';

import mock from '../../__mocks__/mock';
import { CharacterList } from './CharacterList';

const { getMovieMock} = mock;
describe('<CharacterList />', () => {
  let props = {
    movie: getMovieMock,
    selectedMovie: ''
  };

  it('renders the CharacterList component correctly', () => {
    const wrapper = shallow(<CharacterList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the CharacterList component correctly', () => {
     props = {
        movie: {},
        selectedMovie: ''
      };
    const wrapper = shallow(<CharacterList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
