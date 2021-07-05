import "./App.css";
import Navbar from "./navbar.component";
import Carousel from "./components/carousel/carousel.component";
import Card from "./components/card/card.component";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Card></Card>
    </div>
  );
}

export default App;
