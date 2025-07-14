import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './pages/signUp';
import { Login } from './pages/login';
import { NavBar } from './components/navBar/navBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
