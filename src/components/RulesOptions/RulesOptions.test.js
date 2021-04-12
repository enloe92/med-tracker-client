import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RulesOptions from './RulesOptions';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
        <RulesOptions />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});