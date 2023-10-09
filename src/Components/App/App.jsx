import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from '../../Components/RoutesConfig/RoutesConfig';
import '../../all.css';
import Header from '../Header/Header';

function App() {
    return (
        <Router>
            <RoutesConfig />
            <Header />
        </Router>
    );
}

export default App;

