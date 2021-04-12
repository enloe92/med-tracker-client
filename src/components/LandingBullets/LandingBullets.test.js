import React from 'react';
import ReactDOM from 'react-dom';
import LandingBullets from './LandingBullets';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LandingBullets />, div);
    ReactDOM.unmountComponentAtNode(div);
});