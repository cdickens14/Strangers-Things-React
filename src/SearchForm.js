import React, { useState } from 'react';

const SearchForm = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const postMatches = (post, text) => {

    }

    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;

    return (
        <input type="text" placeholder="Search"></input>
    )

}

export default SearchForm;