import React, { useState, useEffect } from 'react';

const Posts = () => {
const [posts, setPosts] = useState([]);

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

    return (
        posts.map((post) => {
                return (
                    <React.Fragment>
                        <div id="title">{post.title}</div>
                        <div id="location">{post.location}</div>
                        <div id="username">{post.author.username}</div>
                        <div id="price">{post.price}</div>
                        <div id="description">{post.description}</div>
                    </React.Fragment>

            )
        }
        
        )
    )
}

export default Posts;