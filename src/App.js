import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './components/posts'
import Social from './components/social'
import './App.css';
import Home from './components/home'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path='/social' element={<Social/>}/>
      </Routes>
    </Router>
  );
}

export default App;
