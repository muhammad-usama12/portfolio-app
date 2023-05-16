import './index.scss';
import React from 'react';
import { Container, Text, useMediaQuery } from '@chakra-ui/react';

const Carousel = (props) => {
  const [forMobile] = useMediaQuery(
    '(min-width: 300px) and (max-width: 900px)',
  );
  return (
    <>
      <Container
        className="carousel"
        display={'grid'}
        justifyItems={'center'}
        padding={10}
      >
        <Text
          className="carousel-title"
          fontSize={forMobile ? '20px' : '30px'}
          paddingTop={forMobile ? '40px' : '10px'}
          paddingBottom={forMobile ? '60px' : '200px'}
          textColor={'#8a8f9b'}
          fontFamily={'Quicksand, sans-serif'}
          textTransform={'uppercase'}
          letterSpacing={'3px'}
        >
          {props.text}
        </Text>
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
      </Container>
    </>
  );
};

export default Carousel;
