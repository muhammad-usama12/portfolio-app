import './index.scss';
import React from 'react';

const Carousel = (props) => {
  return (
    <>
      <div className="carousel">
        <h2 className="title" align="center">
          {props.text}
        </h2>
        <div className="gallery">
          <span style={{ '--i': 1 }}>
            {props.icon1}
            <a href="https://www.google.ca" target={'_blank'} rel="noreferrer">
              {' '}
              TEST LINK
            </a>
          </span>
          <span style={{ '--i': 2 }}>{props.icon2}</span>
          <span style={{ '--i': 3 }}>{props.icon3}</span>
          <span style={{ '--i': 4 }}>{props.icon4}</span>
          <span style={{ '--i': 5 }}>{props.icon5}</span>
          <span style={{ '--i': 6 }}>{props.icon6}</span>
          <span style={{ '--i': 7 }}>{props.icon7}</span>
        </div>
      </div>
    </>
  );
};

export default Carousel;
