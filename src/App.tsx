import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './views/main';
import { ProductView } from './views/productView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Main/>}/>
        <Route path="products/:id" element={<ProductView/>}/>
      </Routes>
    </div>
  );
}

export default App;
