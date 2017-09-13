import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

class App extends Component {
    render() {
        return <BrowserRouter>{routes}</BrowserRouter>;
    }
}

export default App;
