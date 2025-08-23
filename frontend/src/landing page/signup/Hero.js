import React from "react";

function Hero() {
  return (
    <div className=" container text-center mt-5 p-5">
      <h3 className="mb-3">Open a free demat and trading account online</h3>
      <p className="text-muted mb-5" style={{ fontSize: "1.2em" }}>
        Start investing brokerage free and join a community of 1.6+ crore
        investors and traders
      </p>
      <div className="row mb-5 p-5">
        <div className="col-6">
          <img src="media/images/account_open1.svg" style={{ width: "100%" }} />
        </div>
        <div className="col-6">
          <h3>Signup now</h3>
          <p className="text-muted mb-4">Or track your existing application</p>
          <div class="input-group mb-5">
            <div class="input-group-prepend ">
              <span class="input-group-text"  id="basic-addon1">
                <img src="media/images/india-flag.svg"/> +91
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your mobile number"
              aria-label="Enter your mobile number"
              aria-describedby="basic-addon1"
            />

          </div>
            <button className='p-2 btn btn-primary fs-5 mb-3' style={{width: "20%", margin: "0 auto"}}>Get OTP</button>
            <p className="text-muted"style={{fontSize: "0.8em"}}>By proceeding, you agree to the Zerodha <a href="">terms</a> & <a href="">privacy policy</a></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
