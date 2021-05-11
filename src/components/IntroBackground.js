import {
  Stack,
  Flex,
  Fade,
  VStack,
  Box,
  Heading,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import DayCover from '../assets/day-cover.jpg';
import NightCover from '../assets/night-cover.jpg';
import { motion } from 'framer-motion';
import Typical from 'react-typical';

export default function IntroBackground() {
  const { colorMode } = useColorMode();

  let backgroundImg;
  if (colorMode === 'dark') {
    backgroundImg = NightCover;
  } else {
    backgroundImg = DayCover;
  }

  return (
    <Fade in>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={`url(${backgroundImg})`}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={
            colorMode === 'dark'
              ? 'linear(to-r, blackAlpha.800, blackAlpha.300)'
              : 'linear(to-r, blackAlpha.800, blackAlpha.300)'
          }
        >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Box>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Heading
                  bgGradient="linear(to-l, teal.200,cyan.500,blue.500)"
                  bgClip="text"
                  mb={5}
                  fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
                  fontWeight="extrabold"
                  textTransform={'uppercase'}
                >
                  <Typical steps={['', 500, 'Hello World!', 1000]} />
                </Heading>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Heading
                  bgGradient="linear(to-l, teal.200,cyan.500,blue.500)"
                  bgClip="text"
                  fontFamily={'heading'}
                  textTransform={'uppercase'}
                  mb={3}
                  fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
                  fontWeight="extrabold"
                >
                  I'm Alessandro
                </Heading>
              </motion.div>
            </Box>
          </Stack>
        </VStack>
      </Flex>
    </Fade>
  );
}
