import { useEffect, useState } from "react";
import "./Home.css";
import myimg1 from "./img1.jpg";
import myimg2 from "./img2.jpeg";
import myimg3 from "./img3.jpg";
import myimg4 from "./img4.jpg";
import myimg5 from "./img5.jpg";

const data = [myimg1, myimg2, myimg3, myimg4, myimg5];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % data.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className="imageContainer">
      <img src={data[index]} alt="Image not available" className="myImage" />
      <div className="imageText">
        <h1 style={{ color: "white" }}>
          Take Care of your <span style={{ color: "red" }}>body.</span>
          <br /> Its the only place you <br />
          have to <span style={{ color: "red" }}>live.</span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
