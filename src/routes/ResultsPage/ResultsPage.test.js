import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import ResultsPage from './ResultsPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Route path={`/Results/1`} component={ResultsPage} />
        </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});