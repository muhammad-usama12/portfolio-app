import React from 'react';
import './index.scss';
import { ColorRing } from 'react-loader-spinner';
function Projects() {
  return (
    <>
      <div className="container project-page">
        <div className="text"></div>
      </div>
      <ColorRing
        visible={true}
        wrapperClass="loader"
        colors={['#b2c9ab', '#a69eb0', '#a5b6c4', '#f2e2cd', '#d4d4dc']}
      />
      ;
    </>
  );
}
export default Projects;
