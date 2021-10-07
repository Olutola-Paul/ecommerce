import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "/assets/images/buffet.png",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1",
  },
  {
    src: "/assets/images/vadonut.png",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2",
  },
  {
    src: "/assets/images/alberto.png",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3",
  },
];

const MyCarousel = () => <UncontrolledCarousel items={items} />;

export default MyCarousel;
