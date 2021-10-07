import React from "react";
import CardDesign from "./CardDesign";

const Cardlist = ({ category }) => {
  return (
    <div>
      {category.map((user, item) => {
        return (
          <CardDesign
            key={item}
            id={category[item].id}
            name={category[item].name}
            email={category[item].email}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
