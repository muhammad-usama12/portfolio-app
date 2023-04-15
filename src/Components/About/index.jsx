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
            <Svg />

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
