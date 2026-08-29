import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center ">
        <h1 className="fs-2">The Finora Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" className="product-logo"/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" className="product-logo"/>
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" className="product-logo"/>
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" className="product-logo"/>
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" className="product-logo"/>
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" className="product-logo"/>
          <p className="text-small text-muted">Insurance</p>
        </div>
        <Link to='/signup'
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "18%", margin: "0 auto" }}
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
}

export default Universe;
