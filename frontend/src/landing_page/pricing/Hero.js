import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h1 className="fs-2">Pricing</h1>
        <p className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div className="row mt-5 mb-5 text-center">
        <div className="col-4 px-3">
          <img src="media/images/pricingEquity.svg" className="mb-4" style={{width:"270px"}}/>
          <h1 className="fs-3 mb-4">Free equity delivery</h1>
          <p className="text-muted" style={{fontSize:"18px"}}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 px-3">
          <img src="media/images/intradayTrades.svg" className="mb-4" style={{width:"270px"}}/>
          <h1 className="fs-3 mb-4">Intraday and F&O trades</h1>
          <p className="text-muted" style={{fontSize:"18px"}}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 px-3">
          <img src="media/images/intradayTrades.svg" className="mb-4" style={{width:"270px"}}/>
          <h1 className="fs-3 mb-4">Free direct MF</h1>
          <p className="text-muted" style={{fontSize:"18px"}}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
