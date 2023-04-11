import React from 'react';
import './index.scss';
import { ColorRing } from 'react-loader-spinner';
import Carousel from '../Carousel';
import { FaGithub, FaReact, FaSass } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { SiChakraui } from 'react-icons/si';
import taqwaRec from '../../assets/videos/Taqwa Screen Rec (Final).mov';

function Projects() {
  return (
    <>
      <div className="container projects-page">
        <div className="projects-carousel">
          <h1 align="center">Projects</h1>

          <div className="car">
            <Carousel
              text={'Taqwa'}
              description={
                <p align={'center'}>
                  Taqwa (تقوى) is a front-end application that provides
                  essential Islamic tools in a centralized dashboard.{' '}
                </p>
              }
              media={
                <video
                  src={taqwaRec}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              }
              website={
                <a
                  href="https://taqwa.vercel.app/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <TbWorldWww
                    color="
                    #B0BA80"
                    style={{ textDecoration: 'none' }}
                  />
                </a>
              }
              github={
                <a
                  href="https://github.com/muhammad-usama12/taqwa"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <FaGithub color="#333" />
                </a>
              }
              stack={
                <a href="https://react.dev/" target={'_blank'} rel="noreferrer">
                  <FaReact color="#61DBFB" />
                </a>
              }
              stack2={
                <a
                  href="https://www.sass-lang.com"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <FaSass color="#c69" />
                </a>
              }
              api={
                <p align={'center'}>
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    href="https://aladhan.com/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    Aladhan API
                  </a>
                </p>
              }
              ui={
                <a
                  href="https://chakra-ui.com/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <SiChakraui color="#6AF2F0" />
                </a>
              }
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
