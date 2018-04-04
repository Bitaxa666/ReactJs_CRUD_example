/**
 * Created by user on 4/4/18.
 */
'use strict';

import React from 'react';
import { configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SongForm from '../_components/SongForm';
import { expect } from 'chai';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('SongForm', function() {

    it("should render title h1:'This is Home Page'", () => {
        const wrapper = shallow(<SongForm />);
        expect(wrapper.contains(<h1>Add New Song</h1>)).to.equal(true);
    });

   it('state title equals "" when create new card', () => {
        const wrapper = shallow(<SongForm />);
        expect(wrapper.state()._id).to.equal(null);
        expect(wrapper.state().title).to.equal('');
        expect(wrapper.state().cover).to.equal('');
        expect(wrapper.state().loading).to.equal(false);
        expect(wrapper.state().errors).to.deep.equal({});
    });


    it('set state all fields', () => {
        const wrapper = shallow(<SongForm />);
        wrapper.setState({  _id: 1,
                            title: 'test',
                            cover: 'test',
                            loading: true });

        expect(wrapper.state()._id).to.equal(1);
        expect(wrapper.state().title).to.equal('test');
        expect(wrapper.state().cover).to.equal('test');
        expect(wrapper.state().loading).to.equal(true);
    });

    it('send props = {game}', () => {
        var game = {_id: 13,
            title: 'test3',
            cover: 'test3'};

        const wrapper = shallow(<SongForm game={game}/>);
        expect(wrapper.instance().props.game._id).to.equal(13);
        expect(wrapper.instance().props.game.title).to.equal('test3');
        expect(wrapper.instance().props.game.cover).to.equal('test3');
    });

    it('send props = null', () => {
        const wrapper = shallow(<SongForm />);
        expect(wrapper.state()._id).to.equal(null);
        expect(wrapper.state().title).to.equal('');
        expect(wrapper.state().cover).to.equal('');
    });

    it('disable button if all fields is empty', () => {
        const enabled = false;
        const wrapper = shallow(<SongForm />);
        expect(wrapper.containsMatchingElement(<button className="ui primary button" disabled={!enabled}>Save</button>)).to.equal(true);
    });

    it('button is active - if all fields are full', () => {
        const enabled = true;
        const wrapper = shallow(<SongForm />);
        wrapper.setState({
            title: 'test',
            cover: 'test',
            loading: true });
        expect(wrapper.containsMatchingElement(<button className="ui primary button" disabled={!enabled}>Save</button>)).to.equal(true);
    });

});