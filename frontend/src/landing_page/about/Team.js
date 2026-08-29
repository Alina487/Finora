import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3">
        <h1 className="text-center fs-2">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.7", fontSize: "1.1em" }}
      >
        <div className="col-6 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "57%" }}
          />
          <h5 className="mt-2">Nithin Kamath</h5>
          <h6 className="mt-4">Founder, CEO</h6>
        </div>
        <div className="col-6 mt-3">
          <p>
            Nithin bootstrapped and founded Finora in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Finora has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href=''>Homepage</a> / <a href=''>TradingQnA</a> / <a href=''>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
