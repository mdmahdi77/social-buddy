import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment

    return (
        <div>
            <h4>Name: {name}</h4>
            <h6>Email: {email}</h6>
        </div>
    );
};

export default Comment;