import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import RulesPage from './RulesPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <RulesPage />
        </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});