import React from "react";
import RestaurantLogo from "../../images/logo.png";

function HomePage(props) {
  return (
    <div style={homePageStyle}>
      <img style={imageStyle} src={RestaurantLogo} alt="logo" />
      <p style={textStyle}> Welcome to Restaurant Review !</p>
    </div>
  );
}

const homePageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "10%",
};

const imageStyle = {
  width: "25%",
  marginBottom: "5%",
};

const textStyle = {
  fontFamily: "B612, sans-serif",
  fontSize: "50px",
};
export default HomePage;
