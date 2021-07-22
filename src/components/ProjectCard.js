import React from 'react';
import {
  Box,
  Badge,
  Container,
  Image,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { ToolTipSocialButton } from './SocialButton';
import loraImage from '../assets/lora-product.png';
import cancerImage from '../assets/cancer-detection.png';
import capstoneImage from '../assets/capstone-proj.png';
import restauraterImage from '../assets/restaurater.png';
import { motion } from 'framer-motion';

//TODO: fix the props between Projects.js and the Card
//TODO: fix image props - prob import from here cause path is weird (?)
//TODO: *fix the stack of the badges
export default function ProjectCard({ project }) {
  if (project.imageUrl === 'capstoneImage') {
    project.imageUrl = capstoneImage;
  } else if (project.imageUrl === 'loraImage') {
    project.imageUrl = loraImage;
  } else if (project.imageUrl === 'cancerImage') {
    project.imageUrl = cancerImage;
  } else if (project.imageUrl === 'restaurater') {
    project.imageUrl = restauraterImage;
  }

  return (
    <Box
      borderWidth="2px"
      borderRadius="lg"
      alignItems="center"
      boxShadow="xl"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Stack>
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          align="center"
          object-fit="contain"
        />
      </Stack>

      <Box p="6">
        <Box
          bgGradient="linear(to-l, teal.300,blue.500)"
          bgClip="text"
          mb={3}
          fontSize="l"
          fontWeight="extrabold"
          textTransform={'uppercase'}
        >
          {project.title}
        </Box>

        <Box
          as="span"
          color={useColorModeValue('gray.800', 'white')}
          fontSize="sm"
        >
          <Text align={'left'}>{project.description}</Text>
        </Box>
        <Container center centerContent>
          <Stack
            spacing={2}
            justify={{ base: 'center', md: 'center' }}
            paddingTop={5}
            direction={['column', 'row']}
          >
            {project.skills.map((skill) => (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </Stack>
        </Container>
        <Stack
          direction={'row'}
          spacing={6}
          justify={{ base: 'center', md: 'center' }}
          paddingTop={5}
        >
          <ToolTipSocialButton
            label={'Github'}
            href={project.githubLink}
            tipColor="teal.400"
            tipLabel={project.isRepo ? 'View Repo' : 'Private Repo'}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <FaGithub />
            </motion.div>
          </ToolTipSocialButton>
        </Stack>
      </Box>
    </Box>
  );
}
