import React from 'react';
import Loader from 'react-loaders';
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
    '(min-width: 300px) and (max-width: 900px)',
  );
  return (
    <>
      <Loader type="ball-scale-ripple-multiple" />
      <div>
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
              fontSize={forMobile ? '20px' : '50px'}
              marginBottom={'50px'}
              fontFamily={'Yeseva One, cursive'}
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
            <Svg
              svg2={
                <svg
                  className="blob-motion"
                  viewBox="0 0 900 600"
                  width="900"
                  height="600"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <g transform="translate(384.7851457789969 372.01523552342235)">
                    <path
                      id="blob5"
                      d="M178.8 -181.3C238.8 -118.8 299.4 -59.4 298 -1.4C296.6 56.6 233.1 113.1 173.1 136.6C113.1 160 56.6 150.3 -4 154.3C-64.6 158.3 -129.2 176 -153.8 152.6C-178.5 129.2 -163.2 64.6 -159.7 3.5C-156.2 -57.5 -164.4 -115 -139.7 -177.5C-115 -240 -57.5 -307.5 0.9 -308.5C59.4 -309.4 118.8 -243.8 178.8 -181.3"
                      fill="#eaee5f"
                    ></path>
                  </g>
                  <g transform="translate(419.4852057118256 293.4180679133859)">
                    <path
                      id="blob6"
                      d="M125.3 -107.6C184.3 -66.3 269.1 -33.1 288.6 19.5C308.1 72.1 262.2 144.2 203.2 189.2C144.2 234.2 72.1 252.1 -6.6 258.7C-85.3 265.3 -170.6 260.6 -205.3 215.6C-240 170.6 -224 85.3 -225.5 -1.5C-227.1 -88.4 -246.1 -176.8 -211.4 -218.1C-176.8 -259.4 -88.4 -253.7 -27.6 -226.1C33.1 -198.5 66.3 -149 125.3 -107.6"
                      fill="#eaee5f"
                      visibility={'hidden'}
                    ></path>
                  </g>
                </svg>
              }
            />

            <Text
              textAlign={forMobile ? 'center' : 'left'}
              p={10}
              fontSize={forMobile ? '18px' : '20px'}
              mb={5}
            >
              I'm a highly motivated full-stack developer with a solid
              background in Business Administration. I'm on the lookout for
              opportunities that will let me work on exciting and challenging
              projects, using the latest and most innovative technologies. I'm
              all about attention to detail, and I have a natural curiosity that
              drives me to continuously learn and grow. I'm always looking for
              new challenges and opportunities to expand my skillset.
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
              communicating and collaborating with different people from
              different backgrounds. This ability allows me to easily integrate
              into any project team, and work together with stakeholders and
              colleagues to deliver quality results. Whether I'm working
              independently or as part of a team, I always strive to exceed
              expectations and deliver tangible business value.
            </Text>
          </Container>
        </Box>
      </div>
    </>
  );
}

export default About;
