import myimg from "./fitness-girl-doing-workout-5k-w6.jpg";
import "./Home.css";
import React from "react";

function Home() {
  return (
    <div className="imageContainer">
      <img src={myimg} alt="Image not available" className="myImage" />
      <div className="imageText">
        <h1>
          Take Care of your <span style={{ color: "red" }}>body.</span>
          <br /> Its the only place you <br />
          have to <span style={{ color: "red" }}>live.</span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
