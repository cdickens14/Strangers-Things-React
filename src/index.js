import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Posts from './Posts.js';
import Header from './Header.js';
import Login from './Login.js';
import Register from './Register.js';

const App = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <React.Fragment>
            <Header />
            {
                currentForm === 'login' ? <Login onFormSubmit={toggleForm}/> : <Register onFormSubmit={toggleForm}/>
            }
            <Posts />
        </React.Fragment>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<HashRouter>
    <App />
</HashRouter>
);