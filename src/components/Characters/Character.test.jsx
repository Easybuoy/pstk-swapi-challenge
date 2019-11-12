import React from 'react';
import { shallow, mount } from 'enzyme';

import mock from '../../__mocks__/mock';
import { Character } from './Character';

const { getMovieMock, getMoviesMock, getCharactersMock } = mock;
describe('<Character />', () => {
  let props = {
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
    const event = {
      target: {
        name: 'pollName',
        value: JSON.stringify({ title: '', url: '' })
      }
    };
    wrapper.find('select').simulate('change', event);
    expect(wrapper).toMatchSnapshot();
    expect(props.setCharacters).toBeCalled();
  });

  it('should call the mock onClick name function', () => {
    const wrapper = shallow(<Character {...props} />);
    const event = {
      target: {
        name: 'pollName',
        value: JSON.stringify({ title: '', url: '' })
      }
    };
    wrapper.find('.name').simulate('click', event);
    expect(wrapper).toMatchSnapshot();
    expect(props.setCharacters).toBeCalled();
  });

  it('should call the mock onClick name function', () => {
    const wrapper = shallow(<Character {...props} />);
    const event = {
      target: {
        name: 'pollName',
        value: JSON.stringify({ title: '', url: '' })
      }
    };
    wrapper.find('.height').simulate('click', event);
    expect(wrapper).toMatchSnapshot();
    expect(props.setCharacters).toBeCalled();
  });

  it('should call the mock name function', () => {
    props.characters = [];
    const wrapper = shallow(<Character {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
