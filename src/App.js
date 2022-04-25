import React from 'react'
import './App.css';
import NavBar from './components/navBar';
import { Route, Routes } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';

import AddUser from './components/users/addUser';
import EditUser from './components/users/editUser';
import NotFound from './components/notFound';
import User from './components/users/user';

function App() {
  return (
  <>
  <NavBar></NavBar>
  <Routes>
      <Route> 
      <Route path='*' element={<NotFound/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/users/add" element={<AddUser/>}/>
      <Route path="/users/edit/:id" element={<EditUser/>}/>
      <Route path="/users/:id" element={<User/>}/>
      
      
      </Route>
    </Routes>
  </>
  );
}

export default App;
