import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GameSearchSelect from './GameSearchSelect';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
        <GameSearchSelect />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});