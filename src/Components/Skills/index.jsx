import React from 'react';
import './index.scss';
import { Heading, Box, useMediaQuery, Flex } from '@chakra-ui/react';

function Skills() {
  const [forMobile] = useMediaQuery(
    '(min-width: 300px) and (max-width: 900px)',
  );
  return (
    <>
      <Box width={'100%'} zIndex={3}>
        <Flex
          zIndex={999}
          p={4}
          flexDirection="column"
          justifyContent={'space-between'}
          maxW="900px"
          mx="auto"
          marginBottom={5}
        >
          <Heading
            pt={forMobile ? '100px' : '50px'}
            textAlign={'center'}
            fontSize={forMobile ? '30px' : '50px'}
            marginBottom={'30px'}
            fontFamily={'Yeseva One, cursive'}
          >
            SKILLS
          </Heading>
        </Flex>
      </Box>
    </>
  );
}

export default Skills;
