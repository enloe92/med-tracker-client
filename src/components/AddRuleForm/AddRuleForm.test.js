import React from 'react';
import ReactDOM from 'react-dom';
import AddRuleForm from './AddRuleForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddRuleForm />, div);
    ReactDOM.unmountComponentAtNode(div);
});