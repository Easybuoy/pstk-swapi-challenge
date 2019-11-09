import React from 'react';
import { shallow, mount } from 'enzyme';

import mock from '../../__mocks__/mock';
import { Character } from './Character';

const { getMovieMock, getMoviesMock, getCharactersMock } = mock;
describe('<Character />', () => {
  const props = {
    movie: getMovieMock,
    characters: getCharactersMock,
    movies: getMoviesMock,
    getMovies: jest.fn(),
    selectMovie: jest.fn(),
    getMovie: jest.fn(),
    setCharacters: jest.fn()
  };

  it('renders the Character component correctly', () => {
    const wrapper = shallow(<Character {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the mock onChange function', () => {
    const wrapper = mount(<Character {...props} />);

    wrapper.find('select').simulate('change', { preventDefault() {} });
    expect(wrapper).toMatchSnapshot();
    expect(props.setCharacters).toBeCalled();
  });

  it('should call the mock onDOubleCLick function', () => {
    const wrapper = mount(<Character {...props} />);

    wrapper.find('select').simulate('click', { preventDefault() {} });
    expect(wrapper).toMatchSnapshot();
    expect(props.setCharacters).toBeCalled();
  });
  
});
