// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './component/login';
import Home from './component/Home';

import UserManagement from './component/Usermanagement';
import CategoryManagement from './component/CategoryManagement';
import AuctionManagement from './component/AuctionManagement';

function App() {
  return (


    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Home />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/category-management" element={<CategoryManagement />} />
      <Route path="/auction-management" element={<AuctionManagement />} />

    </Routes>

  );
}

export default App;
