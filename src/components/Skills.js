import {
  Stack,
  Container,
  Box,
  Text,
  SimpleGrid,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function StatsGridWithImage() {
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
            py={{ base: 4, md: 20, xl: 20 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                bgGradient="linear(to-l, teal.300,blue.500)"
                bgClip="text"
                mb={3}
                fontSize="2xl"
                fontWeight="extrabold"
                textTransform={'uppercase'}
              >
                Skills
              </Text>

              <Container centerContent>
                <Text
                  fontSize={'xl'}
                  color={useColorModeValue('dark', 'light')}
                >
                  I'm constantly exploring and learning new technologies. Here
                  are some of the skills I've picked up along the way.
                </Text>
              </Container>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontWeight={700}
                    textTransform={'uppercase'}
                    mb={3}
                    fontSize={'xl'}
                    color={'blue.500'}
                  >
                    {stat.title}
                  </Text>
                  <Container center centerContent>
                    <Stack
                      spacing={2}
                      direction={{
                        base: 'column',
                        md: 'column',
                        lg: 'col',
                        xl: 'row',
                      }}
                    >
                      {stat.content.map((stat) => (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          <Badge
                            colorScheme="linkedin"
                            borderRadius="full"
                            px="2"
                          >
                            {stat}
                          </Badge>
                        </motion.div>
                      ))}
                    </Stack>
                  </Container>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const stats = [
  {
    title: 'Languages',
    content: [
      'JavaScript',
      'NodeJS',
      'ReactJS',
      'Python',
      'TypeScript',
      'C++',
      'C#',
    ],
  },
  {
    title: 'Machine Learning',
    content: [
      'TensorFlow',
      'Keras',
      'SkLearn',
      'Pandas',
      'Numpy',
      'BERT',
      'OpenCV',
    ],
  },
  {
    title: 'Tools',
    content: [
      'Git',
      'GCP',
      'Docker',
      'Kubernetes',
      'MongoDB',
      'Cassandra',
      'Heroku',
    ],
  },
  {
    title: 'Other Tech',
    content: ['Express', 'Jest', 'REST', 'GraphQL', 'Matlab', 'JIRA', 'Figma'],
  },
];
