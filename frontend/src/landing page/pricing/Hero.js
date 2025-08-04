import React from 'react';

function Hero() {
    return (  
        <div className='container'>
            <div className='row evenly v-align'>
                <div className='text-center mt-5 ' >
                <h2 className='mb-3'>Charges</h2>
                <h4 className='text-muted'>List of all charges and taxes</h4>
                </div>
                <div className='col p-5 ' style={{marginTop: "15%"}}>
                    <img src='media/images/pricing0.svg' style={{width: "70%"}}/>
                    <h2 style={{marginLeft: "60px", marginBottom: "20px"}}>Free equity delivery</h2>
                    <p className='text-muted' style={{fontSize: "1rem", lineHeight: "1.7em", marginLeft: "60px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col p-5' style={{marginTop: "15%"}}>
                    <img src='media/images/pricing20.svg' style={{width: "70%", marginLeft: "50px"}}/>
                    <h2 style={{marginLeft: "60px", marginBottom: "20px"}}>Intraday and F&O trades</h2>
                    <p className='text-muted' style={{fontSize: "1rem", lineHeight: "1.7em", marginLeft: "60px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col p-5'style={{marginTop: "15%"}}>
                    <img src='media/images/pricing0.svg' style={{width: "70%"}}/>
                    <h2 style={{marginLeft: "60px", marginBottom: "20px"}}>Free direct MF</h2>
                    <p className='text-muted' style={{fontSize: "1rem", lineHeight: "1.7em", marginLeft: "60px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
        </div>
    );
}

export default Hero;