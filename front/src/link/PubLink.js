import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';
import PublicNav from '../nav/PublicNav';

function PubLink() {
    return (
        <>
            <Router>
                <PublicNav />
                <Routes >
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
}

export default PubLink;
