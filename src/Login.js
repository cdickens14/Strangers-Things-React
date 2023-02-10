import React, { useState } from 'react';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const logIn = async (username, password) => {
        //const url = 'https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/register';
        const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({
                user: {
                    username: {username},
                    password: {password}
                }
            })
        }) .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
        setIsLoggedIn(true);
        window.localStorage.setItem('token');
    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input 
                    required type="text" 
                    placeholder="Username" 
                    name="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}>
                </input>
                <input 
                    required type="password" 
                    placeholder="Password" 
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}>
                </input>
            </form>
            <button type="submit">Login</button>
            <button onClick={() => props.onFormSubmit('register')}>Don't Have an Account? Register Here!</button>
        </React.Fragment>
    )
}

export default Login;