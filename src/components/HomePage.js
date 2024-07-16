// this is the home page of the web app
import React from 'react';
import PostList from './PostList';

const HomePage = () => {
  return (
    <div className="container home-page">
      <h1>Home Page</h1>
      <PostList />
    </div>
  );
}

export default HomePage;