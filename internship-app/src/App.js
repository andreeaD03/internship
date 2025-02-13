import "./App.css";
import Navbar from "./components/navBar/NavBar";
import MainDiscription from "./components/mainDiscription/MainDiscription";
import GreenCard from "./components/greenCard/GreenCard";
import SingleCard from "./components/singleCard/SingleCard";
import Banner from "./components/banner/Banner";
import ButtomLists from "./components/banner/buttomLists/ButtomLists";

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
        <Banner />
      </div>
      <div className="buttomBar">
        <h2> Pages</h2>
        <h2>Utility Pages</h2>
      </div>

      <div>
        const data = [ [ "Home (Sales)", "Home V1", "Home V2", "Home V3",
        "About", "Team Members", "Team Single", "Contact V1" ], [ "Contact V2",
        "Contact V3", "Blog V1", "Blog V2", "Blog V3", "Blog Posts", "Blog
        category" ], [ "Sevices", "Services Single", "Products", "Products
        Single", "Pricing", "Pricing Single", "Careers", "Careers Single" ], [
        "Sevices", "Services Single", "Products", "Products Single", "Pricing",
        "Pricing Single", "Careers", "Careers Single" ], [ "Customoer
        Testimonials", "Case Studies", "Case Study Single", "Policy and
        Regulations", "Coming Soon", "More Webflow Templates" ], [ "Start Here",
        "Style Guide", "Password Protected", "404 Not Found", "Licenses",
        "Changelog" ], ]; return (
        <ButtomLists listValues={data} />)
      </div>
    </div>
  );
}

export default App;
