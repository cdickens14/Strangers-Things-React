import React, { useState } from 'react';

const Header = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [displayLogin, setDisplayLogin] = useState(true);

    const handleUsername = (event) => {
        event.preventDefault();
        return setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        event.preventDefault();
        return setPassword(event.target.value);
    }
    
    return (
        <React.Fragment>
            <header>
                <h1>Welcome to Stranger's Things</h1>
            </header>
            <form>
                <input required type="text" placeholder="Username" onChange={handleUsername}></input>
                <input required type="text" placeholder="Password" onChange={handlePassword}></input>
            </form>
            {
                displayLogin ?
                <React.Fragment>
                     <button>Login</button>
                     <button onClick ={() => setDisplayLogin(false)}>Not a User Yet? Register Here!</button>
                </React.Fragment> : 
                <React.Fragment>
                    <input required type="text" placeholder="Confirm Password" onChange={handlePassword}></input>
                    <button>Register</button>
                </React.Fragment>
                
            }
                 
        </React.Fragment>
    )
}

export default Header;