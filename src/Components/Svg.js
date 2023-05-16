import React, { useEffect } from 'react';
import KUTE from 'kute.js';

function Svg(props) {
  useEffect(() => {
    KUTE.fromTo(
      '#blob5',
      { path: '#blob5' },
      { path: '#blob6' },
      { repeat: Infinity, duration: 5000, yoyo: true },
    ).start();
  });

  return (
    <>
      <div className={'blobs-contact'}>{props.svg1}</div>
      <div className={'blobs-about'}>{props.svg2}</div>
      <div className={'blobs-skills'}>{props.svg3}</div>
      <div className={'blobs-projects'}>{props.svg4}</div>
    </>
  );
}

export default Svg;
