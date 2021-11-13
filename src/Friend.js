import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, email, username } = props.friend;
    const friendStyle = {
        border: '3px solid gold',
        padding: '10px',
        borderRadius: '10px',
        margin: '10px'
    }
    return (
        <div style={friendStyle}>
            <h2>name is: {name}</h2>
            <h3>email is: {email}</h3>
            <Link to={`/friend/${id}`}> visit me</Link>
        </div>
    );
};

export default Friend;