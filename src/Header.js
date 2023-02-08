import React, { useState } from 'react';

const Header = () => {
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        return setUsername(event.target.value);
    }
    
    return (
        <React.Fragment>
            <header>
                <h1>Welcome to Stranger's Things</h1>
            </header>
            <form>
                <input type="text" placeholder="Username" onChange={handleChange}></input>
                <input type="text" placeholder="Password" onChange={handleChange}></input>
            </form>
            <button onClick ={() => setIsLoggedIn(true)}>Login</button>
            <button>Register</button>

        </React.Fragment>
    )
}

export default Header;