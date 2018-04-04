/**
 * Created by user on 4/3/18.
 */
'use strict';

import React from 'react';
import { configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../_components/HomePage';
import { expect } from 'chai';



configure({ adapter: new Adapter() });

describe('HomePage', function() {

    it("should render title h1:'This is Home Page'", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.contains(<h1>This is Home Page</h1>)).to.equal(true);
    });

    it("should render className = home_page_class", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find('.home_page_class').length).to.equal(1);
    });

    it("should render input field", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find('input')).to.have.length(1);
    });

    it("should render form", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find('form')).to.have.length(1);
    });

    it("allows us to set props title", () => {
        const wrapper = mount(<HomePage title="22" />);
        expect(wrapper.props().title).to.equal('22');
        wrapper.setProps({ title: 'foo' });
        expect(wrapper.props().title).to.equal('foo');
    });

    it('state title equals ""', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.state().title).to.equal('');
    });

    it('find value', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find('[value]')).to.have.length(1);
    });

    it('pass the input test', () => {
        const wrapper = mount(<HomePage />);
        const form = wrapper.find('input');
        form.props().onChange(
            {target: {
                value: 'test title'
            }});
        expect(wrapper.state('title')).to.equal('test title');
    });

});

