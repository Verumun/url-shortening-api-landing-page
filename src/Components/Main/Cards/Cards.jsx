import React from "react";
import "./Cards.scss";
import img1 from '../../../images/icon-brand-recognition.svg';
import img2 from '../../../images/icon-detailed-records.svg';
import img3 from '../../../images/icon-fully-customizable.svg';

const Cards = () => {
  return(
    <div className="cards">
        <div className="card">
          <div className="image">
            <img src={img1} alt="" />
          </div>

          <div className="content">
            <h4>Brand Recognition</h4>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence
            </p>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={img2} alt="" />
          </div>

          <div className="content">
            <h4>Detailed Records</h4>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={img3} alt="" />
          </div>

          <div className="content">
            <h4>Fully Customizable</h4>
            <p>
              Improve brand awareness and content discoverabilty through customizable links, supercharging audience engagement
            </p>
          </div>
        </div>
      </div>
    ) 
};

export default Cards;
