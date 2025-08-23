import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5 text-center p-5 border-bottom'>
            <div className='row'>
                <h2 className='mb-4 ' style={{color: "#454545"}}>Zerodha Products</h2>
                <h5 className='mb-4 text-muted'>Sleek, modern, and intuitive trading platforms</h5>
                <p style={{marginBottom: "70px"}}>Check out our <a href='' style={{textDecoration: "none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;