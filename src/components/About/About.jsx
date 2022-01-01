import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className=" mt-4 d-flex flex-md-row flex-sm-column justify-content-center">
      <img className="img5x5 me-3" src="./img/shoe10.png" alt="" />

      <div className="mt-5 p-3">
        <h4>About us</h4>
        <h2>Always look fresh</h2>
        <h2>With nike</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
          excepturi?
        </p>
        <button className="btn btn-success">Read More</button>
      </div>
    </div>
  );
};
