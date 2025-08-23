import React from 'react';
import Hero from './Hero';
import Investment from "./Investment";
import Team from "./Team"
import OpenAccount from "../OpenAccount"
import Navbar from '../Navbar';
import Footer from '../Footer';


function SignUpPage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Investment/>
        <Team/>
        <OpenAccount/>
        <Footer/>
        </>
     );
}

export default SignUpPage;