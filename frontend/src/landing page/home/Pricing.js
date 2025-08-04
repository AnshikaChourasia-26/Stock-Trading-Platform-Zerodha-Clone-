import React from 'react';

function Pricing() {
    return (  
        <div className='container p-5'>
            <div className='row v-align around'>
                <div className='col-5 p-5'>
                    <h1 className='fs-3 mx-5 mb-4'>Unbeatable pricing</h1>
                    <p className='text-muted mx-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='mx-5' style={{textDecoration: "none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    
                </div>
                <div className='col-lg-7 col-md-6 d-flex justify-content-between text-center'>
                    <div className='pricing-box px-2 py-5'>
                    <img src='media/images/pricing0.svg'style={{width: "60%"}}></img>
                    <p className='text-muted small mb-0'>Free account <br></br>opening</p>
                   </div>
                   <div className='pricing-box px-2 py-5'> 
                    <img src='media/images/pricingEquity.svg' style={{width: "60%"}}></img>
                    <p className='text-muted small mb-0'> Free equity delivery<br></br> and direct mutual funds</p>
                    </div>
                    <div className='pricing-box px-2 py-5'>
                    <img src='media/images/pricing20.svg' style={{width: "60%"}}></img>
                    <p className='text-muted small mb-0'>Intraday and <br></br>F&O</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;