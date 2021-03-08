import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h1>This the post detail: {id}</h1>
            <h3>User Posted: {post.id}</h3>
            <p>Title: {post.title}</p>
            <p>Post Body: {post.body}</p>
            <h3>Number of comment: {comments.length}</h3>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;