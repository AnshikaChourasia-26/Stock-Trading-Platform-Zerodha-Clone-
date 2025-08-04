import React from 'react';

function Brokerage() {
    return (  
        <div className='container border-top'>
            <div className='row v-align mt-5'>
               <div className='col-8 p-5'>
                <h3 style={{marginLeft: "30px", marginBottom: "30px", color: "#387ED1"}}>Brokerage calculator</h3>
                <ul>
                    <li style={{lineHeight: "2.2em", fontSize: "0.9rem", color: "grey"}}>call & Trade and RMS auto-squareoff: Additional charges of RS 50 + GST per order. </li>
                    <li style={{lineHeight: "2.2em", fontSize: "0.9rem" ,color: "grey"}}>Digital contract notes will be sent via e-mail.</li>
                    <li style={{lineHeight: "2.2em", fontSize: "0.9rem", color: "grey"}}>physical copies of contract notes, if required, shall be charged RS 20 per contract note. Courier charges applied.</li>
                    <li style={{lineHeight: "2.2em", fontSize: "0.9rem", color: "grey"}}>For NRI account(non-PIS),0.5% or RS 100 per executed order of equity(whichever is lower).</li>
                    <li style={{lineHeight: "2.2em", fontSize: "0.9rem", color: "grey"}}>For NRI account(PIS),0.5% or RS 200 per executed order of equity(whichever is lower).</li>
                    <li style={{lineHeight: "2.2em", fontSize: "0.9rem", color: "grey"}}>If the account is in debit balance, any order placed will be charged RS 40 per executed order instead of RS 20 per executed order.</li>

                </ul>
               </div>
               <div className='col-4 p-5'>
                <h3 style={{color: "#387ED1"}}>List of Charges</h3>
               </div>
               
            </div>
        </div>
    );
}

export default Brokerage;