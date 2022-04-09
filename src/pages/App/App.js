import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../Home';
import About from '../About';
import Stock from '../Stock';
import Dashboard from '../Dashboard';
import stocks from "../../data";
import Nav from '../../components/Nav';



export default function App() {
  const data = stocks;

  const [stock, setStock] = useState(null)

  const getStock = (element) => {
    setStock(element)
  }

  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock stock={stock} />} />
        <Route path="/stocks" element={<Dashboard stocks={data} getStock={getStock} />} />
      </Routes>
    </main>
  );
}

