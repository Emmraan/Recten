import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

// All components below
import "./style.css";

function Nav() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setProgress(100); // Adjust progress as needed
  }, [location]);

  return (
    <>
    <nav>
      <Link to="https://recten.onrender.com">
        <h4>
          <img
            src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
            alt=""
          />
        </h4>
      </Link>
      <div className="right-elem">
        <Link to="/work">
          <h4>Work</h4>
        </Link>
        <Link to="/studio">
          <h4>Studio</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
      </div>
    </nav>
    <LoadingBar
      color='orangered'
      height = "3px"
      transitionTime = '400'
      loaderSpeed = "1000"
      waitingTime = "1100"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    </>
  );
}

export default Nav;