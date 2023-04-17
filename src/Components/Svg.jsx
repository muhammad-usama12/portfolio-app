import React, { useEffect } from 'react';
import KUTE from 'kute.js';

function Svg(props) {
  // useEffect(() => {
  //   KUTE.fromTo(
  //     '#blob1',
  //     { path: '#blob1' },
  //     { path: '#blob2' },
  //     { repeat: Infinity, duration: 5000, yoyo: true },
  //   ).start()
  // })
  // useEffect(() => {
  //   KUTE.fromTo(
  //     '#blob3',
  //     { path: '#blob3' },
  //     { path: '#blob4' },
  //     { repeat: Infinity, duration: 5000, yoyo: true },
  //   ).start()
  // })
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
    </>
  );
}

export default Svg;
