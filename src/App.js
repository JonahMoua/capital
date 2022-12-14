import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/signin' element={<SigninPage/>} exact />
        <Route path= '/signup' element={<SignupPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
