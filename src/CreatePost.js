import React, { useState } from 'react';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const addPost = (token) => {
        const url = 'https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts';
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${window.localStorage.getItem('token', `${token}`)}`
            },
            body: JSON.stringify({
                post: {
                    title: `${title}`,
                    description: `${description}`,
                    price: `${price}`,
                    location: `${location}`
                }
            })  
        }).then(response => response.json())
            .then(result => {
            console.log(result);
        }).catch(console.error);
        
        setTitle('');
        setDescription('')
        setPrice('')
        setLocation('');
    } 

     return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input type='text'placeholder='Item Name' value={title} onChange={(event) => setTitle(event.target.value)}></input>
                <input type='text'placeholder='Description'value={description} onChange={(event) => setDescription(event.target.value)}></input>
                <input type='text'placeholder='Price' value={price} onChange={(event) => setPrice(event.target.value)}></input>
                <input type='text'placeholder='Location' value={location} onChange={(event) => setLocation(event.target.value)}></input>
                <button onClick={() => addPost()}>Post Item</button>
            </form>
        </React.Fragment>
    )
}

export default CreatePost;