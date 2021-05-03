import React, { useState } from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Badge,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function ExpEntry({ job }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Box
        p={5}
        shadow="xl"
        borderWidth="2px"
        color={useColorModeValue('gray.800', 'white')}
        zIndex={1}
      >
        <Heading
          fontSize="md"
          align="left"
          textTransform="uppercase"
          color="blue.500"
        >
          {job.title} &bull; {job.company}
        </Heading>

        <Text
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="sm"
          textTransform="uppercase"
          color={useColorModeValue('gray.800', 'white')}
          align="left"
        >
          {job.start} - {job.end}
        </Text>
        <Text mt={4} align="left" fontSize="md">
          {job.desc}
        </Text>
        <Container center centerContent>
          <Stack paddingTop={5} spacing={2} direction={['column', 'row']}>
            {job.techs.map((tech) => (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Badge borderRadius="full" px="2" colorScheme="cyan">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Box>
    </motion.div>
  );
}
