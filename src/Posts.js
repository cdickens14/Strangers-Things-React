import React, { useState } from 'react';

const Posts = (props) => {
const [postId, setPostId] = useState(null);
const [content, setContent] = useState([]);

const handleSubmit = (event) => {
     event.preventDefault();
}

    const removeItem = (postId, token) => {
        const url = `https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts/${postId}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.localStorage.getItem('token', `${token}`)}`
            }
            })
            .then(response => response.json())
            .then(result => {
            console.log(result);
            })
            .catch(console.error);
            setPostId(postId);
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

    }

    return (
            props.posts?.map((post) => {
                return (
                    <React.Fragment>
                        <div id="title">{post.title}</div>
                        <div id="location">{post.location}</div>
                        <div id="username">{post.author.username}</div>
                        <div id="price">{post.price}</div>
                        <div id="description">{post.description}</div>
                        
                        {
                            props.isLoggedIn === true ?
                        <button onClick={()=>removeItem(post._id)}>Delete Post</button> : null
                        }
                        {
                            props.isLoggedIn === true ?
                            <form onSubmit={handleSubmit}>
                                <input id="message" type="text" placeholder="Write message here" value={content} onChange={(event)=>setContent(event.target.value)}></input>
                                <button onClick={() => sendMessage()}>Send</button>
                            </form> : null
                        }
                    </React.Fragment>
                
                    

                )
            }
        
            )
    )
}

export default Posts;