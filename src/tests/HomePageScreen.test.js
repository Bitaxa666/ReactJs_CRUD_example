/**
 * Created by user on 4/4/18.
 */
import React from 'react';
import { configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../_components/HomePage';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });


describe('HomePage', function() {

    it('render main layout', () => {
        const wrapper = shallow(<HomePage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});