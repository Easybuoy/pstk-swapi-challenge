import React from 'react';
import { shallow } from 'enzyme';

import MovieDetails from './MovieDetails';
import mock from '../../__mocks__/mock';

const { getMovieMock } = mock;
describe('<MovieDetails />', () => {
  const props = {
    movie: getMovieMock
  };

  it('renders the MovieDetails component correctly', () => {
    const wrapper = shallow(<MovieDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
