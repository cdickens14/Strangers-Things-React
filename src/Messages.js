import React, { useState } from 'react';

const Messages = () => {
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const sendMessage = (postId, token) => {
        const url = `https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts/${postId}/messages`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${window.localStorage.getItem('token', `${token}`)}`
            },
            body: JSON.stringify({
                message: {
                    content: `${content}`
                }
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);

        setPostId(postId);
        setContent(content);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input id="message" type="text" placeholder="Write message here" value={content} onChange={(event)=>setContent(event.target.value)}></input>
                <button onClick={(post) => sendMessage(post._id)}>Send</button>
            </form>
        </React.Fragment>
    )
}

export default Messages;