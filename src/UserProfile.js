import React, { useState } from 'react';

const UserProfile = (token) => {
    const [messages, setMessages] = useState([]);

    fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/me', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('token', `${token}`)}`
    },
    })
    .then(response => response.json())
    .then(result => {
    setMessages(result.data.messages)
    })
    .catch(console.error);

    return (
        messages?.map((message => {
                return (
                    <React.Fragment>
                        <div className='message'>From:{message.fromUser.username}</div>
                        <div className='message'>Message:{message.content}</div>
                    </React.Fragment>
                )
            
            }))
    )
}


export default UserProfile;