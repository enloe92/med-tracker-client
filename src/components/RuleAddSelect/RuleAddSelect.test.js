import React from 'react';
import ReactDOM from 'react-dom';
import RuleAddSelect from './RuleAddSelect';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RuleAddSelect />, div);
    ReactDOM.unmountComponentAtNode(div);
});