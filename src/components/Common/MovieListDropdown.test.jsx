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
    getMovie: jest.fn(),
    setCharacters: jest.fn(),
    setMovie: jest.fn()
  };

  it('renders the MovieListDropdown component correctly', () => {
    const wrapper = shallow(<MovieListDropdown {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the mock onChange function', () => {
    const wrapper = mount(<MovieListDropdown {...props} />);
    const event = {
      target: {
        name: 'pollName',
        value: JSON.stringify({ title: '', url: '' })
      }
    };
    wrapper.find('select').simulate('change', event);
    expect(props.getMovie).toBeCalled();
  });
});
