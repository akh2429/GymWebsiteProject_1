import React from "react";
import { useState, useEffect } from "react";
import style from "./Program.module.css";
import img1 from "./images/img1.webp";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

const Program = () => {
  let img = [img1, img2, img3, img4];
  let heading = ["Body Building", "Yoga", "Aerobic", "Flexibility"];
  const [image, setImage] = useState(0);
  const [headings, setHeadings] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((image + 1) % img.length);
      setHeadings((headings + 1) % heading.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [image, headings, img.length, heading.length]);

  return (
    <div className={style.box}>
      <div className={style.innerBox2}>
        <h2 className={style.h2}>{heading[headings]}</h2>
        <img src={img[image]} alt="error" className={style.img} />
      </div>
    </div>
  );
};

export default Program;
