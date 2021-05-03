import { Box, Container, Stack, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SocialButton } from './SocialButton';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={6}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'center' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack
          direction={'row'}
          spacing={6}
          justify={{ base: 'center', md: 'center' }}
        >
          <SocialButton
            label={'Github'}
            href={'https://www.github.com/alessnarciso/'}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <FaGithub />
            </motion.div>
          </SocialButton>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/alessandronarciso/'}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <FaLinkedin />
            </motion.div>
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
