import React from 'react';
import {
  Stack,
  Container,
  Box,
  Text,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

// container scales the entire project card size using maxW prop
export default function Projects() {
  return (
    <Box
      bg={useColorModeValue('dark', 'light')}
      position={'center'}
      borderBottom={3}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Container
        maxW={{ base: '3xl', md: '4xl', xl: '4xl' }}
        zIndex={10}
        center
      >
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
                Projects
              </Text>

              <Container centerContent>
                <Text
                  fontSize={'xl'}
                  color={useColorModeValue('dark', 'light')}
                >
                  I love working with emergent technologies to build awesome
                  stuff. Here are some projects I've had a lot of fun building.
                </Text>
              </Container>
            </Box>

            <Box>
              <Text fontSize={'l'} color={useColorModeValue('dark', 'light')}>
                <Project />
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

// less than 4 or 5 techs or will exit card on mobile
const projects = [
  {
    id: 0,
    imageUrl: 'loraImage',
    imageAlt: 'Smart Garden System',
    skills: ['AWS', 'C', 'JavaScript', 'Arduino', 'Electrical'],
    title: 'LoRa Smart Gardener',
    tabTitle: 'Smart Gardener',
    description:
      'Using an Arduino microcontroller to monitor the UBC Rose Garden plant health through a variety of sensors and outputting real time data of plant vitals transmitted through LoRa on a JavaScript website with an AWS DynamoDB back end.',
    isRepo: true,
    githubLink: 'https://github.com/alessnarciso/smartgardener',
  },
  {
    id: 1,
    imageUrl: 'restaurater',
    imageAlt: 'App FrontEnd',
    skills: ['ReactJS', 'NodeJS', 'MongoDB', 'Heroku', 'Microservices'],
    title: 'Restaurant Rater App',
    tabTitle: 'Restaurater',
    description:
      'Developed MERN web app for users to share and keep track of restaurants they’ve been to using Google’s Maps and Geocoding API. Implemented authentication and authorization to handle login sessions, secure password storage, and safe data transfer using JSON web tokens and password hashing.',
    isRepo: false,
  },
  {
    id: 2,
    imageUrl: 'cancerImage',
    imageAlt: 'Image of AUC ROC Curve',
    skills: ['Python', 'TensorFlow', 'Sk-Learn', 'Pandas'],
    title: 'Cancer Detection Using ML',
    tabTitle: 'Cancer Detection',
    description:
      'Predicting if breast cancer tumors are malignant or benign using machine learning. The most accurate solutions were the basic shallow neural network and the linear regression classifier. This had an test accuracy of around 98% and an AUC of about 0.99 in the test data AUC ROC curve.',
    isRepo: true,
    githubLink: 'https://github.com/alessnarciso/ml-cancer-detection',
  },
  {
    id: 3,

    imageUrl: 'capstoneImage',
    imageAlt: 'Capstone Project',
    skills: ['Python', 'TensorFlow', 'Keras', 'Numpy', 'Hardware'],
    title: 'Video Fall Detection Using DL',
    tabTitle: 'Fall Detection',
    description:
      'Video fall detection using deep learning. Built custom LRCN (long-term recurrent convolutional neural network) architecture onboarded onto an NVIDIA processor to detect falls accurately in real time for health and safety in homes. Awarded UBC Applied Science Faculty Award for Best Capstone Project in ECE.',
    isRepo: false,
  } /*
  {
    id: 4,
    imageUrl: 'cancerImage',
    imageAlt: 'Image of AUC ROC Curve',
    skills: ['Python', 'TensorFlow', 'Sk-Learn', 'Pandas'],
    title: 'Cancer Detection Using ML',
    tabTitle: 'Cancer Detection',
    description:
      'Predicting if breast cancer tumors are malignant or benign using machine learning. The most accurate solutions were the basic shallow neural network and the linear regression classifier. This had an test accuracy of around 98% and an AUC of about 0.99 in the test data AUC ROC curve.',
    isRepo: true,
    githubLink: 'https://github.com/alessnarciso/ml-cancer-detection',
  },*/,
];

const projectData = [
  {
    label: projects[0].tabTitle,
    content: (
      <>
        <ProjectCard project={projects[0]} />
      </>
    ),
  },
  {
    label: projects[1].tabTitle,
    content: (
      <>
        <ProjectCard project={projects[1]} />
      </>
    ),
  },
  {
    label: projects[2].tabTitle,
    content: (
      <>
        <ProjectCard project={projects[2]} />
      </>
    ),
  },
  {
    label: projects[3].tabTitle,
    content: (
      <>
        <ProjectCard project={projects[3]} />
      </>
    ),
  } /*
  {
    label: projects[4].tabTitle,
    content: (
      <>
        <ProjectCard project={projects[4]} />
      </>
    ),
  },*/,
];

function Project() {
  function DataTabs({ data }) {
    return (
      <Tabs size="sm" isFitted variant="enclosed">
        <TabList>
          {data.map((tab, index) => (
            <Tab key={index} _hover={{ color: 'white', bg: 'blue.500' }}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel p={4} key={index}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  }
  return <DataTabs data={projectData} />;
}
