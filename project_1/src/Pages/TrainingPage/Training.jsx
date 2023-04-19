import style from "./Training.module.css";
import React, { useRef } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import myImage from "./img.jpg";
const data = [
  {
    url: "https://gossclub.com/wp-content/uploads/2022/02/IMG_7110.jpg",
    name: "Lorem Ipsum",
    job: "Fitness Trainer",
  },
  {
    url: "https://gossclub.com/wp-content/uploads/2022/02/IMG_7133.jpg",
    name: "Lorem Ipsum",
    job: "Dietician",
  },
  {
    url: "https://gossclub.com/wp-content/uploads/2022/02/IMG_7134.jpg",
    name: "Lorem Ipsum",
    job: "Crossfit Coach",
  },
  {
    url: "https://gossclub.com/wp-content/uploads/2022/02/IMG_7139.jpg",
    name: "Lorem Ipsum",
    job: "Body Building",
  },
  {
    url: "https://gossclub.com/wp-content/uploads/2022/02/983A3673-scaled.jpg",
    name: "Lorem Ipsum",
    job: "Nutritionist",
  },
  {
    url: "https://gossclub.com/wp-content/uploads/2022/02/IMG_7062.jpg",
    name: "Lorem Ipsum",
    job: "Weight Gainer Coach ",
  },
  {
    url: "https://gossclub.com/wp-content/uploads/2022/02/IMG_7148.jpg",
    name: "Lorem Ipsum",
    job: "Yoga Teacher",
  },
];

const Training = () => {
  const parentRef = useRef(null);
  function scrollLeft() {
    parentRef.current.scrollBy({ top: 0, left: -200, behaviour: "smooth" });
  }
  function scrollRight() {
    parentRef.current.scrollBy({ top: 0, left: 200, behaviour: "smooth" });
  }
  return (
    <div
      className={style.mainContainer}
      style={{
        backgroundImage: `url(${myImage})`,
      }}
    >
      <div className={style.parentCarouselContainer}>
        <h1 className={style.heading1}>Meet Our Team</h1>
        <h5 className={style.heading2}>
          We are the team of experienced people, nutrition, sports and fitnees
          pattionate experts with talent and knowledge unsurpassed in the
          industry, Get to know us.{" "}
        </h5>
        <div className={style.childCarouselContainer}>
          <button onClick={scrollLeft} className={style.button1}>
            <AiOutlineArrowLeft />
          </button>
          <div className={style.parent} ref={parentRef}>
            {data.map((item, ind) => (
              <div key={ind} className={style.child}>
                <img src={item.url} className={style.image} />
                <h3 className={style.names}>{item.name}</h3>
                <h5 className={style.job}>{item.job}</h5>
              </div>
            ))}
          </div>
          <button onClick={scrollRight} className={style.button2}>
            <AiOutlineArrowRight />
          </button>
        </div>
        <button className={style.wholeteam}>See the Whole Team</button>
      </div>
    </div>
  );
};

export default Training;
