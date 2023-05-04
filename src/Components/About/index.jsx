import React from 'react';
import './index.scss';
import Svg from '../Svg';
import {
  Container,
  Heading,
  Box,
  Text,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import Pic from '../../assets/images/12153DF3-C8B8-4404-93CE-2C58BD3D450C_1_105_c.jpeg';

function About() {
  const [forMobile] = useMediaQuery(
    '(min-width: 300px) and (max-width: 1024px)',
  );
  return (
    <>
      <Box width={'100%'} overflowY={'scroll'}>
        <Container
          p={4}
          display={'flex'}
          flexDirection="column"
          alignItems="center"
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
            ABOUT ME
          </Heading>

          <Image
            className="frame"
            alignSelf={'center'}
            w={forMobile ? '300px' : '400px'}
            h={forMobile ? '300px' : 'auto'}
            objectFit={'cover'}
            src={Pic}
            alt="Muhammad Usama"
            zIndex={4}
          />

          <Text
            textAlign={forMobile ? 'center' : 'left'}
            p={10}
            fontSize={forMobile ? '18px' : '20px'}
            mb={5}
          >
            I'm a highly motivated full-stack developer with a solid background
            in Business Administration. I'm on the lookout for opportunities
            that will let me work on exciting and challenging projects, using
            the latest and most innovative technologies. I'm all about attention
            to detail, and I have a natural curiosity that drives me to
            continuously learn and grow. I'm always looking for new challenges
            and opportunities to expand my skillset.
            <br />
            <br />
            I'm someone who's really passionate about staying up-to-date with
            the latest trends and advancements in software development. I'm
            constantly learning and expanding my technical skills to keep up
            with the rapidly evolving field. I've worked with a variety of
            programming languages, algorithms, and development methodologies,
            and I'm always looking for new ways to grow my expertise and stay
            ahead of the game.
            <br />
            <br />
            I'm not just a tech-savvy developer, but I'm also skilled in
            communicating and collaborating with different people from different
            backgrounds. This ability allows me to easily integrate into any
            project team, and work together with stakeholders and colleagues to
            deliver quality results. Whether I'm working independently or as
            part of a team, I always strive to exceed expectations and deliver
            tangible business value.
          </Text>
          <Container display={'contents'}>
            <Heading
              pt={forMobile ? '100px' : '50px'}
              textAlign={'center'}
              fontSize={forMobile ? '25px' : '35px'}
              // marginBottom={'40px'}
            >
              EDUCATION
            </Heading>
            <div class="holder">
              <div class="line line1"></div>
              <div class="line line2"></div>
            </div>
          </Container>
          <Container display={'contents'}>
            <Heading
              pt={forMobile ? '100px' : '50px'}
              textAlign={'center'}
              fontSize={forMobile ? '25px' : '35px'}
              // marginBottom={'40px'}
            >
              CONTINUED LEARNING
            </Heading>
            <div class="holder">
              <div class="line line1"></div>
              <div class="line line2"></div>
            </div>
          </Container>
          <Svg
            svg2={
              <svg
                id="visual"
                viewBox="0 0 960 540"
                width="960"
                height="540"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <g transform="translate(482.20104820007896 268.46618056079257)">
                  <path
                    id="blob5"
                    d="M145.9 -160.4C188.6 -103.2 222.3 -51.6 244.2 21.9C266.1 95.5 276.3 190.9 233.6 238.3C190.9 285.6 95.5 284.8 6.7 278.1C-82 271.4 -164 258.7 -213 211.4C-262 164 -278 82 -260.9 17.1C-243.7 -47.7 -193.5 -95.5 -144.5 -152.6C-95.5 -209.8 -47.7 -276.4 1.9 -278.3C51.6 -280.3 103.2 -217.6 145.9 -160.4"
                    fill="#f5ecec"
                  ></path>
                </g>{' '}
                <g transform="translate(431.04357176764483 251.8591471748567)">
                  <path
                    id="blob6"
                    d="M119.1 -100C163.3 -75 214.1 -37.5 230.8 16.6C247.4 70.7 229.8 141.4 185.6 184.9C141.4 228.4 70.7 244.7 4.7 240C-61.3 235.3 -122.6 209.6 -158.2 166.1C-193.9 122.6 -203.9 61.3 -197 7C-190 -47.4 -166.1 -94.8 -130.4 -119.8C-94.8 -144.8 -47.4 -147.4 -4.9 -142.4C37.5 -137.5 75 -125 119.1 -100"
                    fill="#f5ecec"
                    visibility={'hidden'}
                  ></path>
                </g>
              </svg>
            }
          />
        </Container>
      </Box>
    </>
  );
}

export default About;
