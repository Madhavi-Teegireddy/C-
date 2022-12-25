
import React from 'react'
import { Route, Routes } from "react-router-dom";

import Chat from "./Chat";
import Home from './Home';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/chats" element={<Chat/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes