import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    
    document.getElementById('root')
)
