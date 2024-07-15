import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import EditProfilePage from './components/EditProfilePage';
import PostDetailsPage from './components/PostDetailsPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/post/:id" element={<PostDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
