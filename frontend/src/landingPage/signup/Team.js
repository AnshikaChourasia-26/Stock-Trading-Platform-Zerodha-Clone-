import React from "react";

function Team(){
    return(
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/acop-benefits.svg " className="mb-3" style={{width: "70%"}}/>
                    <h3>Benefits of opening a Zerodha demat account</h3>
                </div>
                <div className="col-6">
                    <h4 className="mb-4">Unbeatable pricing</h4>
                    <p className="text-muted mb-4">Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                    <h4 className="mb-4">Best investing experience</h4>
                    <p className="text-muted mb-4">Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                    <h4 className="mb-4">No spam or gimmicks</h4>
                    <p className="text-muted mb-4">Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                    <h4 className="mb-4">The Zerodha universe</h4>
                    <p className="text-muted mb-4">More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                </div>
            </div>
        </div>
    )
}

export default Team;