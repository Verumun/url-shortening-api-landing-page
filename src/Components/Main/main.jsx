import React from "react";
import "./main.scss";
import Cards from "./Cards/Cards";
import Form from "./Form/Form";



function main() {
  return (
    <div className="main">
      <Form />
      <div className="header-content">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing accross the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <Cards/>

    </div>
  );
}

export default main;
