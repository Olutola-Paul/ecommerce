import React from "react";
import { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

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
  // const fetchData = async () => {
  //   try {
  //     const users = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     setCategory(users);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // fetchData();

  //console.log("new");
  console.log("category", category);
  //console.log("data", users);

  if (category !== []) {
    const categories = category.map((cat) => {
      console.log(cat);
      return (
        <div key={cat.id}>
          <div>
            <Card className="col-12 col-md-2 m-2 bg-light-green grow dib shadow-5">
              <CardImg
                top
                width="100%"
                src={`https://robohash.org/${cat.id}?size=200x200`}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{cat.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {cat.website}
                </CardSubtitle>
                <CardText>
                  Some quick Card text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    });
    return <div>{categories}</div>;
  } else return <div></div>;
};

export default MyCard;
