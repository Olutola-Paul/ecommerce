import "./App.css";
import { BrowserRouter } from "react-router-dom";
import View from "./views/View";

function App() {
  return (
    <BrowserRouter>
      <View />
    </BrowserRouter>
  );
}

export default App;
