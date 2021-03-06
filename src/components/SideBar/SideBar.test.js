import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './SideBar';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
        <SideBar />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});