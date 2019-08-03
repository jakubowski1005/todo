import React from 'react';
import ReactDOM from 'react-dom';
import SomeComponent from './SomeComponent';

it('renders withoud crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SomeComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});
