import React from "react";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";

const Product = (props) => {
  const [products, setProducts] = useState([]);

  // const { category } =  useFetch("https://jsonplaceholder.typicode.com/users");
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const product = await response.json();
        setProducts(product);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return !products.length ? (
    <h1 className="tc">Loading...</h1>
  ) : (
    <ProductList products={products} />
  );
};

export default Product;
