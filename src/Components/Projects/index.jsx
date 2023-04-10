import React from 'react';
import './index.scss';
import { ColorRing } from 'react-loader-spinner';
import Carousel from '../Carousel';
function Projects() {
  return (
    <>
      <div className="container projects-page">
        <div className="projects-carousel">
          <h1 align="center">Projects</h1>
          <h2>Taqwa</h2>
          <div className="car">
            <Carousel
              text={'Taqwa'}
              icon1={'test'}
              icon2={'test1'}
              icon4={'test2'}
              icon5={'test3'}
              icon6={'test4'}
              icon7={'test5'}
            />
          </div>
          {/* <p>TEST</p> */}
        </div>
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
