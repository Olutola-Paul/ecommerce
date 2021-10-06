import "./App.css";
import MyCard from "./components/Card";
import MyCarousel from "./components/Carousel";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";

function App() {
  return (
    <div className="App">
      <Header1 />
      <Header2 />
      <MyCarousel />
      <MyCard />
    </div>
  );
}

export default App;
