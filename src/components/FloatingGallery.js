import React, { Fragment, useEffect } from "react";
import img1 from "../assets/img8.jpg";
import img2 from "../assets/img15.jpg";
import img3 from "../assets/img10.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img11.jpg";
import img6 from "../assets/img12.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img9.jpg";

export default function Home() {
    let prevX = 0;
    let prevY = 0;
    let moveXAmount = 0;
    let moveYAmount = 0;
    useEffect(() => {
      // grabs all imgs
      let imgArr = document.querySelectorAll(".img");
  
      document.addEventListener("mousemove", (e) => {
        mousePos(e);
        console.log("move")
      });
  
      const mousePos = (e) => {
        moveXAmount = e.pageX - prevX;
        moveYAmount = e.pageY - prevY;
  
        moveImg(moveXAmount, moveYAmount);
  
        prevX = e.pageX;
        prevY = e.pageY;
      };
  
      const moveImg = (xAmount, yAmount) => {
        imgArr.forEach((img) => {
          let movementStrenght = 5 + Math.random() * 15;
  
          img.style.left = img.offsetLeft - (xAmount / movementStrenght) + "px";
          img.style.top = img.offsetTop - (yAmount / movementStrenght) + "px";
        });
      };
    }, []);
  return (
    <Fragment>
      <div className="text">
        <p>
          {" "}
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
        </p>
      </div>

      <img className="img img1" src={img1} alt="" />
      <img className="img img2" src={img2} alt="" />
      <img className="img img3" src={img3} alt="" />
      <img className="img img4" src={img4} alt="" />
      <img className="img img5" src={img5} alt="" />
      <img className="img img6" src={img6} alt="" />
      <img className="img img7" src={img7} alt="" />
      <img className="img img8" src={img8} alt="" />
    </Fragment>
  );
}
