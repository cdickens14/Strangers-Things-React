import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Messages from './Messages.js';

const Posts = (props) => {
const [posts, setPosts] = useState([]);
const [postId, setPostId] = useState(null);


    useEffect(() => {
        const url = 'https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts';
        const fetchPosts = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setPosts(result.data.posts)
                console.log(result)
            } catch (error) {
                console.log('error fetching posts')
    
              } 
        };

        fetchPosts();

    }, []);

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

    return (
        posts.map((post) => {
                return (
                    <React.Fragment>
                        <Link to='/post'><div id="title">{post.title}</div></Link>
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
                            <Messages /> : null
                        }
                        
                    </React.Fragment>

                )
        }
        
           )
    )
}

export default Posts;