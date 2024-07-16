import React from 'react';
import { Link } from 'react-router-dom';


const EditUser = () => {
  return (
    <div className="edit-user-container">
      <h2>Edit User</h2>
      <div>
        <Link to="/create-user">
          <button>Create User</button>
        </Link>
      </div>
      <div>
        <Link to="/update-user">
          <button>Update User</button>
        </Link>
      </div>
      <div>
        <Link to="/delete-user">
          <button>Delete User</button>
        </Link>
      </div>
    </div>
  );
};

export default EditUser;
