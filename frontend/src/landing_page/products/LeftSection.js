import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-7 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-5 p-5">
          <h1 className="fs-4 mb-4">{productName}</h1>
          <p style={{fontSize:"18px", lineHeight:"1.7"}}>{productDescription}</p>
          <div>
            <a href={tryDemo} className="text-decoration-none">Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft: "50px", textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{marginLeft: "20px"}}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
