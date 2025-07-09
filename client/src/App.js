import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './pages/signUp';
import { Login } from './pages/login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
