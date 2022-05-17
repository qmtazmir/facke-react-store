import React from "react";
import "./Menubar.css";

const Menubar = (props) => {
  //   const { country } = props;
  //   console.log(props);
  //   console.log(country);
  return (
    <div>
      <h1>Assalamu Alaikum Warahmatullah</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-2 p-4"></div>
          <div className="col-md-10 menu-bar d-flex justify-content-end">
            <li className="items me-4 p-2">Home</li>
            <li className="items me-4 p-2">Contact</li>
            <li className="items me-4 p-2">
              Cart <sup>{props.count}</sup>{" "}
            </li>
            <li className="items me-4 p-2">Login</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
