import React, { useState } from 'react';

const SearchForm = (props) => {
    const [data, setData] = useState('');

    const filterSearch = () => {
        props.posts.filter(post => {
            if (data === ''){
                return post;
            } else if (post.title.toLowerCase().includes(data.toLowerCase())){
                return post;
            }
        })
    }
    
    return (
        <React.Fragment>
            <input type="text" placeholder="What are you looking for?" value={data} onChange={(event) =>setData(event.target.value)}></input>
            <button onClick={() => filterSearch()}>Search</button>
            <ul>
                {props.posts.map((post) => {
                    <li>{post.title}</li>
                })}
            </ul>
        </React.Fragment>
        
    )

}

export default SearchForm;