import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Posts from './Posts.js';
import Header from './Header.js';
import Login from './Login.js';
import Register from './Register.js';
import CreatePost from './CreatePost.js';
import SearchForm from './SearchForm.js';
import UserProfile from './UserProfile.js';

const App = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [posts, setPosts] = useState([]);

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    const logOut = (token) => {
        setIsLoggedIn(false);
        window.localStorage.removeItem('token', `${token}`);
    }

    useEffect(() => {
        const url = 'https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts';
        const fetchPosts = () => {
            fetch(url)
            .then(response => response.json())
            .then(result => {
            setPosts(result.data.posts);
            })   
            .catch(console.error);
        };

        fetchPosts();

    }, []);


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
            
            <SearchForm posts={posts} setPosts={setPosts}/>
            <Routes>
                <Route path='/' element={<Posts posts={posts} isLoggedIn={isLoggedIn}/>} />
                <Route path='/user' element={<UserProfile />} />
            </Routes>
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