import MyCard from "./Card";
import MyCarousel from "./Carousel";
import Header1 from "./Header1";
import Header2 from "./Header2";

function Home() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <MyCarousel />
      <MyCard />
    </div>
  );
}

export default Home;
