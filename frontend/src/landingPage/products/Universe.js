import React from "react";

function Universe() {
  return (
    <div className="container text-center p-5">
      <div className="row">
        <h1 className="mb-4 fs-4" style={{ color: "#454545" }}>
          {" "}
          The Zerodha Universe
        </h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row evenly v-align">
        <div className="col p-5">
          <img
            className="mb-4"
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "70%" }}
          />
          <p className="text-muted mb-4" style={{ fontSize: "0.8em" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>

          <img
            className="mb-4 mt-4"
            src="media/images/streakLogo.png"
            style={{ width: "70%" }}
          />
          <p className="text-muted" style={{ fontSize: "0.8em" }}>
            Systematic trading platforms that allows you to create and backtest
            strategies without coding
          </p>
        </div>
        <div className="col p-5 mb-4">
          <img
            className=""
            src="media/images/sensibullLogo.svg"
            style={{ width: "70%" }}
          />
          <p className="text-muted mt-5" style={{ fontSize: "0.8em" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img
            className="mt-5"
            src="media/images/smallcaseLogo.png"
            style={{ width: "70%" }}
          />
          <p className="text-muted mt-4" style={{ fontSize: "0.8em" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col p-5">
          <img src="media/images/tijori.svg" style={{ width: "50%" }} />
          <p className="text-muted mt-4" style={{ fontSize: "0.8em" }}>
            Investment research platform
            that offers detailed insights on stocks,
            sectors, supply chains, and more.
            </p>
            <img className=""src="media/images/dittoLogo.png" style={{width: "50%", marginTop: "60px"}}/>
            <p className="text-muted mt-4"style={{fontSize: "0.8em"}}>Personalized advice on life
               and health insurance. No spam
               and no mis-selling.
            </p>
        </div>
         </div>
       <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%", margin: "0 auto"}}>Signup Up For Free</button>

    </div>
  );
}

export default Universe;
