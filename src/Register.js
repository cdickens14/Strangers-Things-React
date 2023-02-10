import React, { useState } from 'react';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
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
                    type="password"
                    placeholder="Confirm Password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}>
                </input>
            </form>
            <button type="submit" onClick={() => props.onFormSubmit('login')}>Login</button>
        </React.Fragment>
    )
}

export default Register;