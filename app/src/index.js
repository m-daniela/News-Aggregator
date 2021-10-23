import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import "./styles/main.css";

// eslint-disable-next-line no-undef
if (module.hot) module.hot.accept();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);