import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  tryDemo,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-5 p-5">
          <h1 className="fs-4 mt-5 mb-4">{productName}</h1>
          <p style={{fontSize:"18px", lineHeight:"1.7"}}>{productDescription}</p>
          <div className="mt-4">
            <a href={learnMore} className="text-decoration-none">
              Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-7 p-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
