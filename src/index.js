import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Posts from './Posts.js';
import Header from './Header.js';
import Login from './Login.js';
import Register from './Register.js';

const App = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <React.Fragment>
            <Header />
            {
                currentForm === 'login' ? <Login onFormSubmit={toggleForm} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> : <Register onFormSubmit={toggleForm}/>
            }
            {
                isLoggedIn === true ? 
                 <button>Logout</button> : null
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