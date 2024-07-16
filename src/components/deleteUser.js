import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:3030/users/delete/${userId}`);
      console.log('User deleted:', response.data);
      alert('User Deleted');
      
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  return (
    <div className="delete-user-container">
      <h2>Delete User</h2>
      <label>User ID:</label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Delete User</button>
    </div>
  );
}

export default DeleteUser;
