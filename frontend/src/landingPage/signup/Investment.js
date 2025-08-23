import React from "react";

function Investment(){
    return(
        <div className="container text-center">
            <h3>Investment options with Zerodha demat account</h3>
            <div className="row v-align mt-5 p-5">
                <div className="col-6 mb-5">
                    <img src="media/images/stocks-acop.svg"/>
                    <h4>Stocks</h4>
                    <p className="text-muted acop-steps-text mb-5">Invest in all exchange-listed securities</p>

                    <img src="media/images/ipo-acop.svg" className="mb-2"/>
                    <h3>IPO</h3>
                    <p className="text-muted">Apply to the latest IPOs instantly via UPI</p>
                </div>
                <div className="col-6">
                    <img src="media/images/mf-acop.svg"/>
                    <h4>Mutual funds</h4>
                    <p className="text-muted mb-5">Invest in commission-free direct mutual funds</p>

                    <img src="media/images/fo-acop.svg" className="mb-3"/>
                    <h3>Futures & options</h3>
                    <p className="text-muted">Hedge and mitigate market risk through simplified F&O trading</p>
                </div>
            <button className='p-2 btn btn-primary fs-5 mb-3' style={{width: "20%", margin: "0 auto"}}>Explore Investment</button>

            </div>
        </div>
    )
}

export default Investment;