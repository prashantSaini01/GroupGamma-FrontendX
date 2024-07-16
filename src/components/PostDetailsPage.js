import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <img src={post.imageUrl} alt={post.title} style={{ maxWidth: '30%', height: 'auto' }} />
          <p>{post.content}</p>
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
}

export default PostDetailsPage;
