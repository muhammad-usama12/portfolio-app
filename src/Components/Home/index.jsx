import React, { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import './index.scss'
import { Link } from 'react-router-dom'
import { Blob } from 'react-interactive-blob'

const languages = [
  "Hello, I'm",
  "Bonjour, je m'appelle",
  'Hola soy,',
  '你好，我叫',
  'こんにちは、私の名前は',
  'سلام، میں ہوں',
  'مرحبا أنا',
  'नमस्ते, मैं हूँ',
]

function Home() {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0)

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
  )

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentLanguageIndex((currentLanguageIndex + 1) % languages.length)
    }, 10000)

    return () => clearTimeout(intervalId)
  }, [currentLanguageIndex])

  return (
    <div className="text-block">
      <Blob
        height={700}
        radius={200}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#a69eb0'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />
      <Blob
        height={700}
        radius={200}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#efeff2'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />
      <Blob
        height={700}
        radius={200}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#f2e2cd'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />
      <Blob
        height={700}
        radius={200}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#dadae3'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />
      <Blob
        height={700}
        radius={200}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#f5ecec'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />
      <Blob
        height={700}
        radius={200}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#a5b6c4'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />
      <Blob
        height={700}
        radius={200}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#d4d4dc'}
        sensitivity={0.3}
        radial={10}
        smoothing={true}
        points={32}
        elasticity={0.001}
      />
      <Blob
        height={700}
        radius={200}
        friction={0.01}
        markers={false}
        speed={1.25}
        color={'#b2c9ab'}
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
              {languages[currentLanguageIndex]}{' '}
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
        <span>I'm a </span>
        <TypeAnimation
          className="typewriter"
          speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
          deletionSpeed={{ type: 'keyStrokeDelayInMs', value: 100 }}
          sequence={[
            'problem solver',
            'fast learner',
            'logical thinker',
            'full-stack developer',
          ]}
        />
      </div>
      <Link to="/contact" className="home-btn">
        Let's Chat!
      </Link>
    </div>
  )
}

export default Home
