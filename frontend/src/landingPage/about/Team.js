import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3">
        <h1 className="border-top text-center text-muted p-5">People</h1>
      </div>
      <div className="row p-5">
        <div className="col-6 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ width: "50%", borderRadius: "100%",}}
          />
          <h5 className="mt-3" style={{ color: "#454545" }}>
            Nithin Kamath
          </h5>
          <p className="text-muted" style={{ fontSize: "1em" }}>
            Founder, CEO
          </p>
        </div>
        <div
          className="col-6"
          style={{ color: "#454545", fontSize: "1.1em", lineHeight: "2.1rem",}}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
