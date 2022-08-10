import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Navbar from './components/Navbar/Navbar';
import SinglePage from "./pages/SinglePage/Single"





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<App />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/product/:id' element={<SinglePage />} />




      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
