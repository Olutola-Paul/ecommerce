import React from "react";
import { useState, useEffect } from "react";
import Cardlist from "./Cardlist";

const MyCard = (props) => {
  const [category, setCategory] = useState([]);

  // const { category } =  useFetch("https://jsonplaceholder.typicode.com/users");
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setCategory(users);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return !category.length ? (
    <h1 className="tc">Loading...</h1>
  ) : (
    <Cardlist category={category} />
  );
};

export default MyCard;
