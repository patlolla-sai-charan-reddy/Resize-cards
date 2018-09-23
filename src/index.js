import React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 100,
      height: 200,
      x: 10,
      y: 10
    };
  }

  render() {
    return (
      <Rnd
        maxWidth={400}
        minWidth={100}
        style={style}
        bounds={"window"}
        size={{
          width: this.state.width,
          height: this.state.height
        }}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={(e, d) => {
          this.setState({ x: d.x, y: d.y });
        }}
        onResize={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          });
        }}
      >
        Rnd
      </Rnd>
    );
  }
}

render(<App />, document.getElementById("root"));
