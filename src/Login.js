import React, { useState } from 'react';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const logIn = async () => {
        //const url = 'https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/register';
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                //'Authorization': 'Bearer {token}'
            },
            body: JSON.stringify({
                user: {
                    username: {username},
                    password: {password}
                }
            })
        }) 
            const result = await response.json();
            console.log(result);
        } catch(error) {
            (console.error)
          }
        props.setIsLoggedIn(true);
        window.localStorage.setItem('token', 'abcde');
        
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
            <button onClick={logIn} type="submit">Login</button>
            <button onClick={() => props.onFormSubmit('register')}>Don't Have an Account? Register Here!</button>
        </React.Fragment>
    )
}

export default Login;