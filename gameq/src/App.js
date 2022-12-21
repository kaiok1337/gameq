import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import './App.css';
import SignUp from './pages/SignUp'
import React, { useState, useEffect } from 'react';

function App() {

  return (
    <main>
      <h1>gameQ</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp  />}></Route>
      </Routes>
    </main>
  );
}

export default App;
