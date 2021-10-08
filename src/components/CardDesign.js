import React from "react";

const CardDesign = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 m-3">
      <img alt="robotfriend" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <a href="/product">
          <strong>{name}</strong>
        </a>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default CardDesign;
