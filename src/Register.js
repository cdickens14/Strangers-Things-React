import React, { useState } from 'react';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const registerUser = () => {
        fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        username: `${username}`,
                        password: `${password}`
                    }
                })
            }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
            window.localStorage.setItem('token', 'token');
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
                <input
                    required type="password"
                    placeholder="Confirm Password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}>
                </input>
            </form>
            <button type="submit" onClick={() => props.onFormSubmit('login')}>Login</button>
            <button type="submit" onClick={() => registerUser()}>Register</button>
        </React.Fragment>
    )
}

export default Register;