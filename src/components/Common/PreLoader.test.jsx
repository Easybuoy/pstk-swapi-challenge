import React from 'react';
import { shallow } from 'enzyme';
// import sinon from 'sinon';

import PreLoader from './PreLoader';

describe('<PreLoader />', () => {

        it('renders the Cart component correctly', () => {
            const wrapper = shallow(<PreLoader />);
            expect(wrapper).toMatchSnapshot();
        });
});