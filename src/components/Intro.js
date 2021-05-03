import {
  Stack,
  Container,
  Box,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import Typical from 'react-typical';
import IntroDetails from './IntroDetails';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <Box
      bg={useColorModeValue('dark', 'light')}
      position={'center'}
      minH={'60px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={3}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Container maxW={'7xl'} zIndex={10} center>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={useColorModeValue('dark', 'light')}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 40 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Heading
                  bgGradient="linear(to-l, teal.200,cyan.500,blue.500)"
                  bgClip="text"
                  mb={5}
                  fontSize={{ base: '5xl', md: '6xl' }}
                  fontWeight="extrabold"
                  textTransform={'uppercase'}
                >
                  <Typical steps={['', 500, 'Hello World!', 1000]} />
                </Heading>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Heading
                  bgGradient="linear(to-l, blue.400,blue.500)"
                  bgClip="text"
                  fontFamily={'heading'}
                  textTransform={'uppercase'}
                  mb={3}
                  fontSize={'2xl'}
                  fontWeight="extrabold"
                >
                  I'm Alessandro
                </Heading>
              </motion.div>

              <Box>
                <Text
                  fontSize={'xl'}
                  color={useColorModeValue('dark', 'light')}
                  marginInline={10}
                >
                  I'm a software engineer and Engineer-In-Training in Vancouver
                  who loves coding impactful projects to make the world a better
                  place. I graduated from the University of British Columbia
                  with a B.ASc in Electrical Engineering. I'm passionate about
                  machine learning, medical technology, and economics.
                </Text>
              </Box>
            </Box>
            <IntroDetails />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
