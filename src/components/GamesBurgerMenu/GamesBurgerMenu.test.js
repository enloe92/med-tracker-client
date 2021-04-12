import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GamesBurgerMenu from './GamesBurgerMenu';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
        <GamesBurgerMenu />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});