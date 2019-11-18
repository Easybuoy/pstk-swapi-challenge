import React from 'react';
import { shallow } from 'enzyme';

import { MovieListDropdown } from './MovieListDropdown';

describe('<MovieListDropdown />', () => {
  const props = {
    setMovieValue: jest.fn().mockResolvedValue([])
  };

  it('renders the MovieListDropdown component correctly', () => {
    const wrapper = shallow(<MovieListDropdown {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
