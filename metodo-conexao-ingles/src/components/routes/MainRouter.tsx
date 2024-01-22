import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import NotFoundPage from '../Utils/NotFoundPage'
import Home from '../home/Home'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/404" Component={NotFoundPage} />
        <Route path="*" element={<Navigate replace to="/404" />} />

      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter