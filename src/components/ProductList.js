import React from "react";
import ProductDesign from "./ProductDesign";

function ProductList({ products }) {
  return (
    <div>
      {products.map((user, item) => {
        return (
          <ProductDesign
            key={item}
            id={products[item].id}
            title={products[item].title}
            description={products[item].description}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
