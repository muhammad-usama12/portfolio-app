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
          <span style={{ '--i': 1, display: 'flex', alignItems: 'center' }}>
            {props.description}
          </span>
          <span style={{ '--i': 2, display: 'flex', alignItems: 'center' }}>
            {' '}
            {props.media}
          </span>
          <span style={{ '--i': 3, display: 'flex', alignItems: 'center' }}>
            {props.website}
          </span>
          <span style={{ '--i': 4, display: 'flex', alignItems: 'center' }}>
            {props.github}
          </span>{' '}
          <span
            style={{
              '--i': 5,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {props.stack}
          </span>
          <span style={{ '--i': 6, display: 'flex', alignItems: 'center' }}>
            {props.stack2}
          </span>
          <span
            className="ui"
            style={{ '--i': 7, display: 'flex', alignItems: 'center' }}
          >
            {props.ui}
          </span>
          <span
            style={{
              '--i': 8,
              display: 'grid',
              alignItems: 'center',
              justifyItems: 'center',
            }}
          >
            {props.api}
          </span>
        </div>
      </div>
    </>
  );
};

export default Carousel;
