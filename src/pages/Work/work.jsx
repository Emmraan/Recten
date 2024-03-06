import React from "react";
import Nav from "../../components/Nav/nav";
import "./style.css";
function Work() {
  return (
    <>
      <Nav />
      <div id="wraper">
        <div className="gooey"></div>
        <div id="wc">
          <h1>WORK</h1>
          <div className="foot">
            <h6>All</h6>
            <h6>Experiential</h6>
            <h6>Environment</h6>
            <h6>Digital</h6>
          </div>
        </div>
      </div>
    </>
  );
}
export default Work;
