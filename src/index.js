import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Carts from'./pages/Carts';
import Products from './pages/Products';
import {
    BrowserRouter, Router,
    Route
  } from "react-router-dom";


function ServerInstall(){
    const [cart, setCart] = useState()
    return (
        <BrowserRouter>
        <Router>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Products />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="*" element={<App />} />
        </Router>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ServerInstall />
  
);

