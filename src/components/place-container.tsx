import { render } from "@testing-library/react";
import React from "react";
import Place from "./place";


export interface placeType {
  id: number;
  place: string;
  desc: string;
  img: string;
}

interface State {
  data: placeType[];
}

class PlaceContainer extends React.Component<any, State> {
  state: State = {
    data: [],
  };
  componentDidMount() {
    fetch("http://localhost:5001/places")
      .then((res) => res.json())
      .then((dataPlace) => {
        this.setState({ data: dataPlace });
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.data.map((item) => {
          return <Place key={item.id} {...item} />;
        })}
      </div>
    );
  }
}

export default PlaceContainer;
