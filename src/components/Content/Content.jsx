import React from "react";
import "./Content.css";

export const Content = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 h-40">
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="p-5">
            <h2 className="color-1">Always</h2>
            <h2 className="color-1">Dripping</h2>
            <h6 className="mt-3">Never show down</h6>
            <h6>with nike</h6>
            <button className="btn btn-primary mt-3 bg-1">View Shop</button>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <img className="img-fluid" src="./img/shoe5.png" alt="" />
      </div>
    </div>
  );
};
