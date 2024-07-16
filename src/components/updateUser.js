import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [userId, setUserId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3030/user/update/${userId}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('User updated:', response.data);
      alert('User Updated');
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };

  return (
    <div className="update-user-container">
      <h2>Update User</h2>
      <label>User ID:</label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default UpdateUser;
