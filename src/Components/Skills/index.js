import React from 'react';
import './index.scss';
import Svg from '../svg';
import {
  Heading,
  Box,
  useMediaQuery,
  VStack,
  Container,
  Text,
} from '@chakra-ui/react';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  DiRuby,
  DiHtml5,
  DiCss3,
  DiSass,
  DiNodejs,
  DiReact,
  DiJqueryLogo,
  DiBootstrap,
} from 'react-icons/di';
import { BsGit, BsFillDatabaseFill } from 'react-icons/bs';
import {
  SiRubyonrails,
  SiPostgresql,
  SiJest,
  SiStorybook,
  SiCypress,
  SiMocha,
  SiChai,
  SiChakraui,
} from 'react-icons/si';

function Skills() {
  const [forMobile] = useMediaQuery(
    '(min-width: 300px) and (max-width: 1024px)',
  );

  return (
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
            marginBottom={'30px'}
            color={'#e69138'}
          >
            SKILLS
          </Heading>
        </VStack>

        {forMobile ? (
          <Svg
            svg3={
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
                    fill="#fff7e3"
                  ></path>
                </g>{' '}
                <g transform="translate(431.04357176764483 251.8591471748567)">
                  <path
                    id="blob6"
                    d="M119.1 -100C163.3 -75 214.1 -37.5 230.8 16.6C247.4 70.7 229.8 141.4 185.6 184.9C141.4 228.4 70.7 244.7 4.7 240C-61.3 235.3 -122.6 209.6 -158.2 166.1C-193.9 122.6 -203.9 61.3 -197 7C-190 -47.4 -166.1 -94.8 -130.4 -119.8C-94.8 -144.8 -47.4 -147.4 -4.9 -142.4C37.5 -137.5 75 -125 119.1 -100"
                    fill="#fff7e3"
                    visibility={'hidden'}
                  ></path>
                </g>
              </svg>
            }
          />
        ) : (
          <Svg
            svg3={
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
                    fill="#fff7e3"
                  ></path>
                </g>{' '}
                <g transform="translate(431.04357176764483 251.8591471748567)">
                  <path
                    id="blob6"
                    d="M119.1 -100C163.3 -75 214.1 -37.5 230.8 16.6C247.4 70.7 229.8 141.4 185.6 184.9C141.4 228.4 70.7 244.7 4.7 240C-61.3 235.3 -122.6 209.6 -158.2 166.1C-193.9 122.6 -203.9 61.3 -197 7C-190 -47.4 -166.1 -94.8 -130.4 -119.8C-94.8 -144.8 -47.4 -147.4 -4.9 -142.4C37.5 -137.5 75 -125 119.1 -100"
                    fill="#fff7e3"
                    visibility={'hidden'}
                  ></path>
                </g>
              </svg>
            }
          />
        )}
        <Container pt={'20px'} maxW={'100vh'}>
          <Text className={'text-style'} fontSize={forMobile ? '20px' : '30px'}>
            Languages
          </Text>
          <Box className="skills-gallery">
            <span>
              <IoLogoJavascript className="skill-logos" color="#F0DB4F" />
            </span>
            <span>
              <DiRuby className="skill-logos" color="#cc0000" />
            </span>
            <span>
              <DiHtml5 className="skill-logos" color="#F16529" />
            </span>

            <span>
              <DiCss3 className="skill-logos" color="#2965f1" />
            </span>
            <span>
              <BsFillDatabaseFill className="skill-logos" color="#f29111" />
            </span>
          </Box>
          <Text className={'text-style'} fontSize={forMobile ? '20px' : '30px'}>
            Frameworks
          </Text>
          <Box className="skills-gallery">
            {' '}
            <span>
              <DiReact className="skill-logos" color="#61dbfb" />
            </span>
            <span>
              <SiRubyonrails className="skill-logos" color="#CC0000" />
            </span>
            <span>
              <DiNodejs className="skill-logos" color="#3C873A" />
            </span>
            <span>
              <DiJqueryLogo className="skill-logos" color="#0868ac" />
            </span>
            <span>
              <DiBootstrap className="skill-logos" color="#563d7c" />
            </span>
            <span>
              <SiChakraui className="skill-logos" color="#319795" />
            </span>
            <span>
              <DiSass className="skill-logos" color="#c69" />
            </span>
          </Box>
          <Text className={'text-style'} fontSize={forMobile ? '20px' : '30px'}>
            Systems and Databases
          </Text>
          <Box className="skills-gallery">
            <span>
              <SiPostgresql className="skill-logos" color="#336699" />
            </span>
            <span>
              <BsGit className="skill-logos" color="#F1502F" />
            </span>
          </Box>
          <Text className={'text-style'} fontSize={forMobile ? '20px' : '30px'}>
            Testing
          </Text>
          <Box className="skills-gallery">
            {' '}
            <span>
              <SiJest className="skill-logos" color="#CC0000" />
            </span>
            <span>
              <SiStorybook className="skill-logos" color="#ff528c" />
            </span>
            <span>
              <SiCypress className="skill-logos" color="#444444" />
            </span>
            <span>
              <SiMocha className="skill-logos" color="#835941" />
            </span>
            <span>
              <SiChai className="skill-logos" color="#a1070c" />
            </span>
          </Box>
        </Container>
      </Container>
    </Box>
  );
}

export default Skills;
