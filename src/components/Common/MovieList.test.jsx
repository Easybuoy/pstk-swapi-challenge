import React from 'react';
import { shallow } from 'enzyme';

import { MovieList } from './MovieList';

describe('<MovieList />', () => {
  const props = {
    setMovieValue: jest.fn().mockResolvedValue([])
  };

  it('renders the MovieList component correctly', () => {
    const wrapper = shallow(<MovieList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
