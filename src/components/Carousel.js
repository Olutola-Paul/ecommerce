import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "/assets/images/gadgets.jpg",
    altText: "Slide 1",
    key: "1",
  },
  {
    src: "/assets/images/camera.jpg",
    altText: "Slide 2",
    key: "2",
  },
  {
    src: "/assets/images/phone.jpg",
    altText: "Slide 3",
    key: "3",
  },
  {
    src: "/assets/images/raspberry.jpg",
    altText: "Slide 3",
    key: "4",
  },
];

const MyCarousel = () => <UncontrolledCarousel items={items} />;

export default MyCarousel;
