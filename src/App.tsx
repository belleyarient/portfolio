import React from 'react';

import './App.css';
import {Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter basename='portfolio/'>
      <div className="App">
        {/* <h1>Hello World</h1> */}
        <Header />
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='blog' element={<BlogPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
