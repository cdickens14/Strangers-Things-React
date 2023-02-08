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
                        <div>{post.title}</div>
                        <div>{post.location}</div>
                        <div>{post.author.username}</div>
                        <div>{post.price}</div>
                        <div>{post.description}</div>
                    </React.Fragment>

            )
        }
        
        )
    )
}

export default Posts;