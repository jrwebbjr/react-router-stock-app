import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../Home';
import About from '../About';
import Stock from '../Stock';
import Dashboard from '../Dashboard';



export default function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock/>} />
        <Route path="/stocks" element={<Dashboard />} />
      </Routes>
    </main>
  );
}

