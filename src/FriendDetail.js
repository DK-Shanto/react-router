import React from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    return (
        <div>
            <h1>This is dynamic routing</h1>
            <h2>user id is : {friendId}</h2>
        </div>
    );
};

export default FriendDetail;