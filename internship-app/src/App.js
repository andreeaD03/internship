import "./App.css";
import Navbar from "./components/navBar/NavBar";
import MainDiscription from "./components/mainDiscription/MainDiscription";
import GreenCard from "./components/greenCard/GreenCard";
import SingleCard from "./components/singleCard/SingleCard";
import GreenSlide from "./components/footer/GreenSlide";

function App() {
  const data = [
    {
      packageChoice: "basic",
      packageDescription:
        "lorem10 lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10",
      price: "499$",
    },
    {
      packageChoice: "standard",
      packageDescription:
        "lorem10 202929 orem10lorem10lorem10lorem10lorem10lorem10lorem1",
      price: "599$",
    },
    {
      packageChoice: "pro",
      packageDescription:
        "12345777 lorem10 orem10lorem10lorem10lorem10lorem10lorem10lorem1",
      price: "699$",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <MainDiscription />
      <div className="cards">
        <div className="single-cards">
          {data.map((card) => (
            <SingleCard cardData={card} className="card" />
          ))}
        </div>
        <GreenCard />
      </div>
      <div>
        <GreenSlide />
      </div>
    </div>
  );
}

export default App;
