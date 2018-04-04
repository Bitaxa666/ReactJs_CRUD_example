import React from 'react';
import reducers from './reducers/games';
import { expect } from 'chai';
import { configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', function() {

    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<h2>Welcome to React</h2>)).to.equal(true);
    });

     it('reducers', () => {
     expect(reducers(undefined, {})).to.deep.equal([]);
     });
});