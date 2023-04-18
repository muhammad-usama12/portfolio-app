import React from 'react';
import './index.scss';
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
    '(min-width: 300px) and (max-width: 900px)',
  );

  return (
    <>
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
          color={'#fdcd37'}
        >
          SKILLS
        </Heading>
      </VStack>
      <Container display={'grid'} justifyItems={'center'} padding={10}>
        <Text fontSize={forMobile ? '20px' : '30px'}>Languages</Text>
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
        <Text fontSize={forMobile ? '20px' : '30px'}>Frameworks</Text>
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
        <Text fontSize={forMobile ? '20px' : '30px'}>
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
        <Text fontSize={forMobile ? '20px' : '30px'}>Testing</Text>
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
    </>
  );
}

export default Skills;
