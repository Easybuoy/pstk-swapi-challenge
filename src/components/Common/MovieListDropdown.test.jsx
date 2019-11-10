import React from 'react';
import { shallow, mount } from 'enzyme';

import mock from '../../__mocks__/mock';
import { MovieListDropdown } from './MovieListDropdown';

const { getMovieMock, getMoviesMock } = mock;
describe('<MovieListDropdown />', () => {
  const props = {
    movie: getMovieMock,
    movies: getMoviesMock,
    getMovies: jest.fn(),
    selectMovie: jest.fn(),
    getMovie: jest.fn()
  };

  it('renders the MovieListDropdown component correctly', () => {
    const wrapper = shallow(<MovieListDropdown {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the mock onChange function', () => {
    const wrapper = mount(<MovieListDropdown {...props} />);

    wrapper.find('select').simulate('change', { preventDefault() {} });
    expect(props.getMovie).toBeCalled();
  });
});
