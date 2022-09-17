import React from 'react';

import './App.css';
import {Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import * as THREE from 'three';

function App() {
  return (
    <BrowserRouter basename='portfolio/'>
      <head><meta name='viewport' content='width=device=width, initial-scale=1.0'/></head>
      <div className="App">
        {/* <h1>Hello World</h1> */}
        <Header />
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='profile' element={<Profile />} />
          <Route path='blog' element={<BlogPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
