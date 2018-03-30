import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from './reducers/games';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('reducers', () => {
    expect(reducers(undefined, {})).toEqual([]);
});
