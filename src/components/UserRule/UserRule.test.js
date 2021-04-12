import React from 'react';
import ReactDOM from 'react-dom';
import UserRule from './UserRule';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserRule />, div);
    ReactDOM.unmountComponentAtNode(div);
});