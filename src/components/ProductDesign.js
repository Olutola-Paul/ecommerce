import React from "react";

function ProductDesign({ title, description, id }) {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robotfriend" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductDesign;
