import React from 'react';
import { shallow, mount } from 'enzyme';

import mock from '../../__mocks__/mock';
import { Character } from './Character';

const { getMovieMock, getMoviesMock } = mock;
describe('<Character />', () => {
  const props = {
    movie: getMovieMock,
    movies: getMoviesMock,
    getMovies: jest.fn(),
    selectMovie: jest.fn(),
    getMovie: jest.fn()
  };

  it('renders the Character component correctly', () => {
    const wrapper = shallow(<Character {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the mock onChange function', () => {
    const wrapper = mount(<Character {...props} />);

    wrapper.find('select').simulate('change', { preventDefault() {} });
    expect(props.getMovie).toBeCalled();
  });
});
