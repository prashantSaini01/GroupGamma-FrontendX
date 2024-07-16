import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    img: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3030/posts/create', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Post created:', response.data);
      alert('Post Created');
      
    } catch (error) {
      console.error('Error creating post:', error.message);
    }
  };

  return (
    <div className="create-post-container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
        <br />
        <label>Content:</label>
        <textarea name="content" value={formData.content} onChange={handleChange} />
        <br />
        <label>Image URL:</label>
        <input type="text" name="img" value={formData.img} onChange={handleChange} />
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
