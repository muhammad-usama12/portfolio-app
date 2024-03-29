import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './index.scss';
import { Link } from 'react-router-dom';
import { Blob } from 'react-interactive-blob';

const languages = [
  "Hello, I'm",
  "Bonjour, je m'appelle",
  'Hola, soy',
  '你好，我叫',
  'こんにちは、私の名前は',
  'سلام، میں ہوں',
  'مرحبا أنا',
  'नमस्ते, मैं हूँ',
];

function Home() {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  const blobSpec = {
    h: 500,
    w: 150,
  };

  const name = (
    <a
      className="name"
      href="https://github.com/muhammad-usama12"
      target={'_blank'}
      rel="noreferrer"
    >
      {' '}
      Usama
    </a>
  );

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentLanguageIndex((currentLanguageIndex + 1) % languages.length);
    }, 5000);

    return () => clearTimeout(intervalId);
  }, [currentLanguageIndex]);

  return (
    <div className="text-block">
      <Blob
        height={blobSpec.h}
        radius={blobSpec.w}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#e6e1d8'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />

      <Blob
        height={blobSpec.h}
        radius={blobSpec.w}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#d9d2c5'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />

      <Blob
        height={blobSpec.h}
        radius={blobSpec.w}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#d3cbbb'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />
      <Blob
        height={blobSpec.h}
        radius={blobSpec.w}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#c1b59f'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />
      <Blob
        height={blobSpec.h}
        radius={blobSpec.w}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#ada28f'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />
      <Blob
        height={blobSpec.h}
        radius={blobSpec.w}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#9a907f'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />

      <h1>
        {languages[currentLanguageIndex] === 'سلام، میں ہوں' ||
        languages[currentLanguageIndex] === 'مرحبا أنا' ? (
          <>
            {name}
            <span className="languages">
              {' '}
              {languages[currentLanguageIndex]}
            </span>
          </>
        ) : (
          <>
            <span className="languages">
              {' '}
              {languages[currentLanguageIndex]}{' '}
            </span>
            {name}
          </>
        )}
      </h1>

      <div className="type-animation">
        <span className="typewriter-start">I'm </span>
        <TypeAnimation
          className="typewriter"
          speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
          deletionSpeed={65}
          sequence={[
            'a problem solver',
            750,
            'an innovative thinker',
            750,
            'analytical',
            750,
            'a team player',
            750,
            'a full-stack developer',
          ]}
        />
      </div>
      <div className="home-tags">
        <Link to="/about" className="about-btn">
          Get to Know Me
        </Link>
        <Link to="/projects" className="projects-btn">
          My Work
        </Link>
        <Link to="/contact" className="contact-btn">
          Let's Connect
        </Link>
      </div>
    </div>
  );
}

export default Home;
