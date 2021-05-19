import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "60vh",
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
      paddingTop: "80px",
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
        {/* <Grid item s={3}></Grid> */}
        {/* <Grid item s={2}> */}
          <div style={MyCarousel.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
              <div style={MyCarousel.CARD_STYLE}>OSTELLO</div>
              <div style={MyCarousel.CARD_STYLE}>BLOGS</div>
              <div style={MyCarousel.CARD_STYLE}>HELLO</div>
            </ReactCardCarousel>
          </div>
        {/* </Grid> */}
        {/* <Grid item s={3}></Grid> */}
      </>
    );
  }
}

export default MyCarousel

const rootElement = document.getElementById("root");
ReactDOM.render(<MyCarousel />, rootElement);
