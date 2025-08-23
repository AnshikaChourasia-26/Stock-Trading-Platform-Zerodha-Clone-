import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import HomePage from './landingPage/home/HomePage';
import SignUpPage from './landingPage/signup/SignUpPage';
import AboutPage from './landingPage/about/AboutPage';
import ProductsPage from './landingPage/products/ProductsPage';
import PricingPage from './landingPage/pricing/PricingPage';
import SupportPage from './landingPage/support/SupportPage';
import NotFound from './landingPage/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/Signup' element={<SignUpPage/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/Products' element={<ProductsPage/>}></Route>
    <Route path='/Pricing' element={<PricingPage/>}></Route>
    <Route path='/Support' element={<SupportPage/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>



  </Routes>
  </BrowserRouter>
);

