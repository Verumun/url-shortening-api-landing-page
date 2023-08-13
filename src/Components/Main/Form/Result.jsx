import "./Result.scss";
import React from 'react';
import { useState } from "react";

const Result = () => {

    const [shortenLink, setShortenLink] = useState("https://rel.ink./4lyk")

  return (
    <div className="result-wrapper">
      <div id="inputed-link" className="inputed-link">
        https://www.frontendmentor.io
      </div>
      <hr />
      <div className="flex">
        <div id="shortened-link" className="shortened-link">{shortenLink}</div>
        <button className="">Copy</button>
      </div>
    </div>
  );
};

export default Result;
