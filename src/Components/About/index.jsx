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
      <Box width={'100%'} height={'100%'}>
        <Container
          display={'grid'}
          justifyItems={'center'}
          maxW="900px"
          mx="auto"
        >
          <Heading
            pt={forMobile ? '100px' : '50px'}
            textAlign={'center'}
            fontSize={forMobile ? '30px' : '50px'}
            marginBottom={'40px'}
            color={'#db3c30'}
          >
            ABOUT ME
          </Heading>
          {forMobile ? (
            <Svg
              svg2={
                <svg
                  id="visual"
                  viewBox="175 50 650 900"
                  width="375"
                  height="600"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <g transform="translate(482.20104820007896 268.46618056079257)">
                    <path
                      id="blob5"
                      d="M145.9 -160.4C188.6 -103.2 222.3 -51.6 244.2 21.9C266.1 95.5 276.3 190.9 233.6 238.3C190.9 285.6 95.5 284.8 6.7 278.1C-82 271.4 -164 258.7 -213 211.4C-262 164 -278 82 -260.9 17.1C-243.7 -47.7 -193.5 -95.5 -144.5 -152.6C-95.5 -209.8 -47.7 -276.4 1.9 -278.3C51.6 -280.3 103.2 -217.6 145.9 -160.4"
                      fill="#fcd9d6"
                    ></path>
                  </g>{' '}
                  <g transform="translate(431.04357176764483 251.8591471748567)">
                    <path
                      id="blob6"
                      d="M119.1 -100C163.3 -75 214.1 -37.5 230.8 16.6C247.4 70.7 229.8 141.4 185.6 184.9C141.4 228.4 70.7 244.7 4.7 240C-61.3 235.3 -122.6 209.6 -158.2 166.1C-193.9 122.6 -203.9 61.3 -197 7C-190 -47.4 -166.1 -94.8 -130.4 -119.8C-94.8 -144.8 -47.4 -147.4 -4.9 -142.4C37.5 -137.5 75 -125 119.1 -100"
                      fill="#fcd9d6"
                      visibility={'hidden'}
                    ></path>
                  </g>
                </svg>
              }
            />
          ) : (
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
          )}

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
            className="about-body"
            textAlign={forMobile ? 'center' : 'left'}
            p={15}
            fontSize={forMobile ? '14px' : '20px'}
            mb={5}
          >
            <span>
              <strong>I'm a</strong>
            </span>{' '}
            highly motivated{' '}
            <span>
              <strong>full-stack developer</strong>
            </span>{' '}
            with a{' '}
            <span>
              <strong>background in Business Administration</strong>
            </span>
            . I'm on the{' '}
            <span>
              <strong>lookout for opportunities</strong>
            </span>{' '}
            that will let me{' '}
            <span>
              <strong>work on exciting and challenging projects</strong>
            </span>
            , using the{' '}
            <span>
              <strong>latest and most innovative technologies</strong>
            </span>
            . I'm all about{' '}
            <span>
              <strong>attention to detail</strong>
            </span>
            , and I have a natural curiosity that drives me to continuously{' '}
            <span>
              <strong>learn and grow</strong>
            </span>
            . I'm always looking for new challenges and opportunities to expand
            my skillset.
            <br />
            <br />
            As a developer, I bring more than just technical skills to the
            table. My{' '}
            <span>
              <strong>communication and collaboration skills</strong>
            </span>{' '}
            enable me to seamlessly integrate into any project team and work
            effectively{' '}
            <span>
              <strong>with stakeholders and colleagues</strong>
            </span>{' '}
            from diverse backgrounds. I take pride in my ability to adapt to new
            situations and consistently{' '}
            <span>
              <strong>deliver exceptional results</strong>
            </span>
            , whether working{' '}
            <span>
              <strong>independently</strong>
            </span>{' '}
            or as{' '}
            <span>
              <strong>part of a team</strong>
            </span>
            .
          </Text>
          <Container display={'contents'}>
            <Heading
              pt={forMobile ? '0px' : '50px'}
              textAlign={'center'}
              fontSize={forMobile ? '25px' : '35px'}
              marginBottom={'40px'}
              textColor={'#777a65'}
            >
              EDUCATION
            </Heading>
            <div className="holder">
              <div className="line line1"></div>
              <div className="line line2"></div>
            </div>
            <>
              <Box className="education-box">
                <Text
                  fontStyle={'oblique'}
                  textColor={'#b2907e'}
                  fontSize={'14px'}
                >
                  Diploma in Web Development (Full-Stack)
                </Text>
                <Text>
                  <hr />
                  <Text fontStyle={'italic'} textColor={'#b2907e'}>
                    Lighthouse Labs <br /> <br /> Toronto, CA
                  </Text>
                </Text>
              </Box>
              <Box className="education-box">
                <Text
                  fontSize={'14px'}
                  fontStyle={'oblique'}
                  textColor={'#b2907e'}
                >
                  Bachelor of Business Administration (Spec. in Accounting)
                </Text>
                <Text>
                  <hr />
                  <Text fontStyle={'italic'} textColor={'#b2907e'}>
                    Trent University <br /> <br /> Peterborough, CA
                  </Text>
                </Text>
              </Box>
            </>
          </Container>
          <Container display={'contents'}>
            <Heading
              pt={forMobile ? '60px' : '50px'}
              textAlign={'center'}
              fontSize={forMobile ? '25px' : '35px'}
              marginBottom={'40px'}
              textColor={'#777a65'}
            >
              PROFESSIONAL DEVELOPMENT
            </Heading>

            <Box
              className="legend
            "
            >
              <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                Planned <Text className="status-indicator red" />
              </Text>
              <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                In progress <Text className="status-indicator amber" />
              </Text>
              <Text
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                Completed <Text className="status-indicator green" />
              </Text>
            </Box>
            <Box className="development-box">
              <Text
                display={'inline-flex'}
                alignItems={'center'}
                fontSize={'14px'}
                fontStyle={'oblique'}
                textColor={'#b2907e'}
              >
                The Complete JavaScript Course: From Zero to Expert!
                <Text className="status-indicator amber" />
              </Text>
              <Text>
                <hr />
                <Text textColor={'#b2907e'}>
                  Instructor: Jonas Schmedtman <br /> <br /> Udemy
                </Text>
              </Text>
            </Box>
            <Box className="development-box">
              <Text
                display={'inline-flex'}
                alignItems={'center'}
                fontSize={'14px'}
                fontStyle={'oblique'}
                textColor={'#b2907e'}
              >
                Ultimate AWS Cloud Practitioner Course
                <Text className="status-indicator amber" />
              </Text>
              <Text>
                <hr />
                <Text textColor={'#b2907e'}>
                  Instructor: Stephane Maarek
                  <br /> <br /> Udemy
                </Text>
              </Text>
            </Box>
            <Box className="development-box">
              <Text
                display={'inline-flex'}
                alignItems={'center'}
                fontSize={'14px'}
                fontStyle={'oblique'}
                textColor={'#b2907e'}
              >
                SQL and PostgreSQL: The Complete Developer's Guide
                <Text className="status-indicator amber" />
              </Text>
              <Text>
                <hr />
                <Text textColor={'#b2907e'}>
                  Instructor: Stephen Grider <br /> <br /> Udemy
                </Text>
              </Text>
            </Box>
          </Container>
        </Container>
      </Box>
    </>
  );
}

export default About;
