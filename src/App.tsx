import React from "react";
import Banner from "./components/banner";
import Details from "./components/details-block";
import PlaceContainer from "./components/place-container";
import Footer from "./components/footer";
import "./css/main.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <Details title="Stories of Adventure" />
      <PlaceContainer />
      <Details title="Popular adventure" />
      <Footer />
    </div>
  );
};

export default App;
