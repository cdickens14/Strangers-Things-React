import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Posts from './Posts.js';
import Header from './Header.js';
const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Posts />
        </React.Fragment>
    )
}
    

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);