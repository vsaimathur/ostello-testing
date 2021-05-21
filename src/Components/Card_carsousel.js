import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";


class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "62vh",
      width: "100%",
      display: "wrap",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
      marginBottom: "0rem"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "50vh",
      width: "50vw",
      paddingTop: "120px",
      textAlign: "center",
      background: "#5e72eb",
      color: "#FFF",
      fontSize: "35px",
      fontFamily: "sans-serif",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <>
          <div style={MyCarousel.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={3200}>
              <div style={MyCarousel.CARD_STYLE}>WELCOME</div>
              <div style={MyCarousel.CARD_STYLE}>OSTELLO</div>
              <div style={MyCarousel.CARD_STYLE}>BlOGS</div>
            </ReactCardCarousel>
          </div>
      </>
    );
  }
}

export default MyCarousel

const rootElement = document.getElementById("root");
ReactDOM.render(<MyCarousel />, rootElement);
