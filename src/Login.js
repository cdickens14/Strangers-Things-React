import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const logIn = () => {
                fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/login', {
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
            })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                props.setIsLoggedIn(true);
                window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VjZWZjZDkxNjVjMjAwMTViNTIxN2MiLCJ1c2VybmFtZSI6ImNkaWNrZW5zIiwiaWF0IjoxNjc2NDc4NzQ2fQ.Bnvkynvu-jzClq9zyELS3Iq5PEPqpsELaidSfvtaEtI')})
            .catch(console.error);
            
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
            {
                props.isLoggedIn === false ?
            <button onClick={logIn} type="submit">Login</button> : null
}
            {
                props.isLoggedIn === false ?
            <button onClick={() => props.onFormSubmit('register')}>Don't Have an Account? Register Here!</button> : null
            }
            {
                props.isLoggedIn === true ?
                <Link to='/user'>Go To My Profile</Link> : null
            }
        
            
        </React.Fragment>
    )
}

export default Login;