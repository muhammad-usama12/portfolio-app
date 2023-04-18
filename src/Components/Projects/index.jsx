import React from 'react';
import './index.scss';
import Carousel from '../Carousel';
import { FaGithub, FaReact, FaSass } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { SiChakraui } from 'react-icons/si';
import {
  Heading,
  Box,
  useMediaQuery,
  VStack,
  Container,
} from '@chakra-ui/react';
import taqwaRec from '../../assets/videos/Taqwa Screen Rec (Final).mov';

function Projects() {
  const [forMobile] = useMediaQuery(
    '(min-width: 300px) and (max-width: 1024px)',
  );
  return (
    <>
      <Box width={'100%'} zIndex={3}>
        <VStack
          zIndex={1}
          flexDirection="column"
          justifyContent={'space-between'}
          maxW="900px"
          mx="auto"
        >
          <Heading
            pt={forMobile ? '100px' : '50px'}
            textAlign={'center'}
            fontSize={forMobile ? '30px' : '50px'}
            marginBottom={'40px'}
            color={'#fdcd37'}
          >
            PROJECTS
          </Heading>
        </VStack>
        <Container
          display={'grid'}
          justifyItems={'center'}
          padding={10}
          paddingRight={'2.5em'}
        >
          <Box paddingBottom={forMobile ? '1em' : '10em'}>
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
          </Box>
          <Box
            paddingBottom={forMobile ? '5em' : '10em'}
            paddingTop={forMobile ? '5em' : '10em'}
          >
            <Carousel
              text={'Project 2'}
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
          </Box>
          <Box
            paddingBottom={forMobile ? '5em' : '10em'}
            paddingTop={forMobile ? '5em' : '10em'}
          >
            <Carousel
              text={'Project 3'}
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
          </Box>
          <Box
            paddingTop={forMobile ? '5em' : '10em'}
            paddingBottom={forMobile ? '5em' : '15em'}
          >
            <Carousel
              text={'Project 4'}
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
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default Projects;
