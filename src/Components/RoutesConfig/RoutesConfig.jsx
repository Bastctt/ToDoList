import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import General from '../General/General';
import Archive from '../Archive/Archive';


function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/General" element={<General />} />
            <Route path="/Archive" element={<Archive />} />
        </Routes>
    );
}

export default RoutesConfig;
