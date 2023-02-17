import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Posts from './Posts.js';
import Header from './Header.js';
import Login from './Login.js';
import Register from './Register.js';
import CreatePost from './CreatePost.js';
import Messages from './Messages.js';
import SearchForm from './SearchForm.js';

const App = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    const logOut = (token) => {
        setIsLoggedIn(false);
        window.localStorage.removeItem('token', `${token}`);
    }

    return (
        <React.Fragment>
            <Header />
            {
                currentForm === 'login' ? <Login onFormSubmit={toggleForm} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> : <Register onFormSubmit={toggleForm} setIsLoggedIn={setIsLoggedIn}/>
            }
            {
                isLoggedIn === true ?
                <CreatePost /> : null
            }
            
            <SearchForm />
            <Posts isLoggedIn={isLoggedIn}/>  
            
            {
                isLoggedIn === true ?
                <button onClick={() => logOut()}>Logout</button> : null
            }
        
            
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