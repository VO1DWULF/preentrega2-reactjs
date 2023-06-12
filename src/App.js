import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, ItemListContainer, ItemDetailContainer } from './components';
import { mangaList } from './components/mangaData';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer mangaList={mangaList} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer mangaList={mangaList} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer mangaList={mangaList} cart={cart} setCart={setCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;