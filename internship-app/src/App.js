import "./App.css";
import Navbar from "./components/navBar/NavBar";
import MainDiscription from "./components/mainDiscription/MainDiscription";
import Cards from "./components/cards/Cards";
import GreenCard from "./components/greenCard/GreenCard";
import SingleCard from "./components/singleCard/SingleCard";

function App() {
  const data = [
    {
      packageChoice: "basic",
      packageDescription: "lorem10",
      price: "499$",
    },
    {
      packageChoice: "standard",
      packageDescription: "lorem10 202929",
      price: "599$",
    },
    {
      packageChoice: "pro",
      packageDescription: "12345777 lorem10",
      price: "699$",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <MainDiscription />
      <div className="cards">
        <div className="single-cards">
          <SingleCard cardData={data[0]} />
          <SingleCard cardData={data[1]} />
          <SingleCard cardData={data[2]} />
        </div>
        <GreenCard />
      </div>
    </div>
  );
}

export default App;
