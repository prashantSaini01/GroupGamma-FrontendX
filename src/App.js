import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import PostDetailsPage from './components/PostDetailsPage';
import CreateUser from './components/createUser';
import UpdateUser from './components/updateUser';
import DeleteUser from './components/deleteUser';
import GetUser from './components/userList';
import CreatePost from './components/createPost';
import EditUser from './components/editUser';
import PostList from './components/PostList';
import EditPost from './components/editPost';
import DeletePost from './components/deletePost';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetailsPage />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/update-user" element={<UpdateUser />} />
        <Route path="/delete-user" element={<DeleteUser />} />
        <Route path="/get-users" element={<GetUser />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/post-list" element={<PostList />} />
        <Route path="/edit-post/:postId" element={<EditPost />} />
        <Route path="/delete-post/:postId" element={<DeletePost />} />
      </Routes>
    </Router>
  );
};

export default App;
