
import React from 'react'
import '../App.css';
import { Route, Routes } from "react-router-dom";

import Chat from "./Chat";
import Home from './Home';

const MainRoutes = () => {
  return (
    <div className='App'>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/chats" element={<Chat/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes