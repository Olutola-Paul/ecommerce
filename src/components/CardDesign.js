import React from "react";

const CardDesign = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robotfriend" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <strong>{name}</strong>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default CardDesign;
