import React from 'react';
import './index.scss';
import Svg from '../Svg';
import Carousel from '../Carousel';
import { FaCss3, FaGithub, FaReact, FaSass } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import {
  SiChakraui,
  SiFirebase,
  SiTwilio,
  SiStorybook,
  SiCypress,
} from 'react-icons/si';
import { DiHtml5, DiNodejs } from 'react-icons/di';
import {
  Heading,
  Box,
  useMediaQuery,
  VStack,
  Container,
  Image,
} from '@chakra-ui/react';
import taqwaRec from '../../assets/videos/Taqwa Screen Rec (Final).mov';
import teeboImg from '../../assets/images/teebo_1.png';
import teeboImg2 from '../../assets/images/teebo_2.png';
import foodApp from '../../assets/images/food_app.png';
import foodApp2 from '../../assets/images/food_app2.png';
import schedulerApp from '../../assets/images/scheduler.png';
import schedulerApp2 from '../../assets/images/scheduler2.png';

function Projects() {
  const [forMobile] = useMediaQuery(
    '(min-width: 300px) and (max-width: 1024px)',
  );
  return (
    <>
      <Box width={'100%'} height={'100%'}>
        <Container
          display={'grid'}
          justifyItems={'center'}
          maxW="100vh"
          mx="auto"
        >
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
              color={'#6d7482'}
            >
              PROJECTS
            </Heading>
          </VStack>

          {forMobile ? (
            <Svg
              svg4={
                <svg
                  id="visual"
                  viewBox="175 125 650 900"
                  width="375"
                  height="600"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <g transform="translate(482.20104820007896 268.46618056079257)">
                    <path
                      id="blob5"
                      d="M145.9 -160.4C188.6 -103.2 222.3 -51.6 244.2 21.9C266.1 95.5 276.3 190.9 233.6 238.3C190.9 285.6 95.5 284.8 6.7 278.1C-82 271.4 -164 258.7 -213 211.4C-262 164 -278 82 -260.9 17.1C-243.7 -47.7 -193.5 -95.5 -144.5 -152.6C-95.5 -209.8 -47.7 -276.4 1.9 -278.3C51.6 -280.3 103.2 -217.6 145.9 -160.4"
                      fill="#f4f5f9"
                    ></path>
                  </g>{' '}
                  <g transform="translate(431.04357176764483 251.8591471748567)">
                    <path
                      id="blob6"
                      d="M119.1 -100C163.3 -75 214.1 -37.5 230.8 16.6C247.4 70.7 229.8 141.4 185.6 184.9C141.4 228.4 70.7 244.7 4.7 240C-61.3 235.3 -122.6 209.6 -158.2 166.1C-193.9 122.6 -203.9 61.3 -197 7C-190 -47.4 -166.1 -94.8 -130.4 -119.8C-94.8 -144.8 -47.4 -147.4 -4.9 -142.4C37.5 -137.5 75 -125 119.1 -100"
                      fill="#f4f5f9"
                      visibility={'hidden'}
                    ></path>
                  </g>
                </svg>
              }
            />
          ) : (
            <Svg
              svg4={
                <svg
                  id="visual"
                  viewBox="0 200 960 540"
                  width="750"
                  height="540"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <g transform="translate(482.20104820007896 268.46618056079257)">
                    <path
                      id="blob5"
                      d="M145.9 -160.4C188.6 -103.2 222.3 -51.6 244.2 21.9C266.1 95.5 276.3 190.9 233.6 238.3C190.9 285.6 95.5 284.8 6.7 278.1C-82 271.4 -164 258.7 -213 211.4C-262 164 -278 82 -260.9 17.1C-243.7 -47.7 -193.5 -95.5 -144.5 -152.6C-95.5 -209.8 -47.7 -276.4 1.9 -278.3C51.6 -280.3 103.2 -217.6 145.9 -160.4"
                      fill="#f4f5f9"
                    ></path>
                  </g>{' '}
                  <g transform="translate(431.04357176764483 251.8591471748567)">
                    <path
                      id="blob6"
                      d="M119.1 -100C163.3 -75 214.1 -37.5 230.8 16.6C247.4 70.7 229.8 141.4 185.6 184.9C141.4 228.4 70.7 244.7 4.7 240C-61.3 235.3 -122.6 209.6 -158.2 166.1C-193.9 122.6 -203.9 61.3 -197 7C-190 -47.4 -166.1 -94.8 -130.4 -119.8C-94.8 -144.8 -47.4 -147.4 -4.9 -142.4C37.5 -137.5 75 -125 119.1 -100"
                      fill="#f4f5f9"
                      visibility={'hidden'}
                    ></path>
                  </g>
                </svg>
              }
            />
          )}
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
                    typeof="video/mp4"
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
                      color={'#76a6b4'}
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
                  <a
                    href="https://react.dev/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
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
                      style={{ textDecoration: 'none', color: '#76a6b4' }}
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
                text={'Teebo'}
                description={
                  <p align={'center'}>
                    Teebo is a full-stack app which provides a platform for TV
                    show fans to connect, engage and discuss their favorites
                    shows.{' '}
                  </p>
                }
                media={<Image src={teeboImg} />}
                website={<Image src={teeboImg2} />}
                github={
                  <a
                    href="https://github.com/muhammad-usama12/teebo"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <FaGithub color="#333" />
                  </a>
                }
                stack={
                  <>
                    <a
                      href="https://react.dev/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      <FaReact color="#61DBFB" />
                    </a>
                    <a
                      href="https://www.sass-lang.com"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      <FaSass color="#c69" />
                    </a>
                  </>
                }
                stack2={
                  <>
                    <a
                      href="https://www.sass-lang.com"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      <SiFirebase color="#FFCB2B" />
                    </a>
                  </>
                }
                api={
                  <p align={'center'}>
                    <a
                      style={{ textDecoration: 'none', color: '#76a6b4' }}
                      href="https://developers.giphy.com/docs/api/#quick-start-guide"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      Giphy API
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
                text={'Food Ordering App'}
                description={
                  <p align={'center'}>
                    A food ordering app that enables users to order food and
                    reminds them when their food's ready via text notification.{' '}
                  </p>
                }
                media={<Image src={foodApp} />}
                website={<Image src={foodApp2} />}
                github={
                  <a
                    href="https://github.com/muhammad-usama12/food_ordering_app"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <FaGithub color="#333" />
                  </a>
                }
                stack={
                  <>
                    <a
                      href="https://react.dev/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      <DiHtml5 color="#F16529" />
                    </a>
                  </>
                }
                stack2={
                  <a
                    href="https://www.sass-lang.com"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <FaCss3 color="#2965f1" />
                  </a>
                }
                api={
                  <a
                    href="https://www.twilio.com/docs/usage/api"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <SiTwilio color="#f22f46" />
                  </a>
                }
                ui={
                  <a
                    href="https://react.dev/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <DiNodejs color="#3C873A" />
                  </a>
                }
              />
            </Box>
            <Box
              paddingTop={forMobile ? '5em' : '10em'}
              paddingBottom={forMobile ? '5em' : '15em'}
            >
              <Carousel
                text={'Interview Scheduler'}
                description={
                  <p align={'center'}>
                    Interview Scheduler is a full-stack application which allows
                    users to book and manage appointments.{' '}
                  </p>
                }
                media={<Image src={schedulerApp} />}
                website={<Image src={schedulerApp2} />}
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
                  <a
                    href="https://react.dev/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <FaReact color="#61DBFB" />
                  </a>
                }
                stack2={
                  <a
                    href="https://www.sass-lang.com"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <FaCss3 color="#2965f1" />
                  </a>
                }
                api={
                  <a
                    href="https://chakra-ui.com/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <SiCypress color="#444444" />
                  </a>
                }
                ui={
                  <a
                    href="https://chakra-ui.com/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <SiStorybook color="#ff528c" />
                  </a>
                }
              />
            </Box>
          </Container>
        </Container>
      </Box>
    </>
  );
}
export default Projects;
