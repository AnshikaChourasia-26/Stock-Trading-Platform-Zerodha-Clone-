import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import HomePage from './landing page/home/HomePage';
import Signup from './landing page/signup/SignUp';
import AboutPage from './landing page/about/AboutPage';
import ProductsPage from './landing page/products/ProductsPage';
import PricingPage from './landing page/pricing/PricingPage';
import SupportPage from './landing page/support/SupportPage';
import NotFound from './landing page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/Products' element={<ProductsPage/>}></Route>
    <Route path='/Pricing' element={<PricingPage/>}></Route>
    <Route path='/Support' element={<SupportPage/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>



  </Routes>
  </BrowserRouter>
);

