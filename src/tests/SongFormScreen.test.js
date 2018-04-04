/**
 * Created by user on 4/4/18.
 */
import React from 'react';
import { configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SongForm from '../_components/SongForm';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });


describe('SongForm', function() {

    it('render main layout ofr SongForm', () => {
        const wrapper = shallow(<SongForm />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});