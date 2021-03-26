import React from "react";
import img1 from "../assets/img4.jpg";
export default function HorizontalGallery() {
  return (
    <div className="container">
      <div className="slider">
        <img className="img" src={img1} alt="" />
        <img className="img" src={img1} alt="" />
        <img className="img" src={img1} alt="" />
        <img className="img" src={img1} alt="" />
      </div>
    </div>
    // <div class="container">
    //   <div class="container__item container__item-header">
    //     <div class="container__item container__item-1">
    //       <h1 class="container__item-title">
    //         <a href="project.html">Asterisks</a>
    //       </h1>
    //     </div>
    //     <div class="container__item container__item-2">
    //       <h1 class="container__item-title">
    //         <a href="project.html">Unlocked</a>
    //       </h1>
    //     </div>
    //     <div class="container__item container__item-3">
    //       <h1 class="container__item-title">
    //         <a href="project.html">Offbeat</a>
    //       </h1>
    //     </div>
    //     <div class="container__item container__item-4">
    //       <h1 class="container__item-title">
    //         <a href="project.html">Brutal</a>
    //       </h1>
    //     </div>
    //     <div class="container__item container__item-5">
    //       <h1 class="container__item-title">
    //         <a href="project.html">Mouthwash</a>
    //       </h1>
    //     </div>
    //   </div>
    // </div>
  );
}
