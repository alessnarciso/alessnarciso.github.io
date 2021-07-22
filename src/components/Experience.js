import React from 'react';
import {
  Box,
  Stack,
  Text,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ExpEntry from './ExpEntry';

//TODO: fix props into the Exp Entry components
//TODO: instead of a long description, just short description of role, add skills instead ?

//maxW on container controls the size of the cards
export default function Experience() {
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
      <Container maxW={'5xl'} zIndex={10} center>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={useColorModeValue('dark', 'light')}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 20 }}
          >
            <Intro />

            <Box>
              <Stack spacing={8}>
                <ExpEntry job={jobs[0]} />
                <ExpEntry job={jobs[1]} />
                <ExpEntry job={jobs[2]} />
                <ExpEntry job={jobs[3]} />
                <ExpEntry job={jobs[4]} />
                <ExpEntry job={jobs[5]} />
                <ExpEntry job={jobs[6]} />
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

function Intro() {
  return (
    <Box mb={{ base: 8, md: 20 }}>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Text
          bgGradient="linear(to-l, teal.300,blue.500)"
          bgClip="text"
          mb={3}
          fontSize="2xl"
          fontWeight="extrabold"
          textTransform={'uppercase'}
        >
          Experience
        </Text>
      </motion.div>

      <Container centerContent>
        <Text
          fontSize={'xl'}
          color={useColorModeValue('dark', 'light')}
          align={'left'}
        >
          I have a strong background in software development and engineering.
          Here are some of exciting places I've worked.
        </Text>
      </Container>
    </Box>
  );
}

const jobs = [
  {
    id: 0,
    title: 'Software Engineer',
    company: 'TELUS',
    start: '06/2020',
    end: 'Present',
    desc: 'Building and maintaining various full stack internal tools and APIs for customer order fulfillment. Utilizing deep learning and NLP to increase call center efficiency. Developed an initial augmented reality (AR) app for technicians to provide remote assistance to customers saving $2M annually in operating costs.',
    techs: ['Full Stack', 'Back End', 'Cloud', 'DevOps', 'ML', 'AR'],
  },
  {
    id: 1,
    title: 'Technology Consultant',
    company: 'Skills4Good',
    start: '01/2021',
    end: 'Present',
    desc: 'Compiling documentation and research from academic papers to consult in the development of a standardized pipeline for auditing A.I. algorithms to prevent unfair and unethical discrimination and bias.',
    techs: ['ML', 'AI Ethics', 'Research', 'Project Mgmt.'],
  },
  {
    title: 'Leader of Tomorrow',
    company: 'GapSummit 2020',
    start: '01/2020',
    end: '10/2020',
    desc: 'Selected as a Leader of Tomorrow and one of the Top 100 Young Biotechnology Leaders in the World by Global Biotech Revolution. I attended the GapSummit 2020 conference at Cambridge University to participate in discussion with international academic and industry leaders about solving global gaps in biotechnology. ',
    techs: ['Biotech', 'NLP', 'ML', 'Research'],
  },
  {
    title: 'Chief Executive Officer',
    company: 'UBC BEST',
    start: '10/2015',
    end: '03/2020',
    desc: 'Led a team of 90 students at the UBC Biomedical Engineering Student Team (UBC BEST) in the development of 8 various and impactful medical technology projects for implementation in collaboration with hospitals and medical organizations.',
    techs: ['Biotech', 'Full Stack', 'Project Mgmt.', 'Mentorship'],
  },
  {
    title: 'ICT Engineering Co-op',
    company: 'Huawei',
    start: '05/2018',
    end: '08/2018',
    desc: '1 of 10 Canadian engineering students chosen for Huawei Seeds for the Future Work Experience Program based on demonstrated excellent academic acumen and a submitted CV. Spent 3 weeks in Beijing and Shenzhen taking classes and learning about ICT, 5G, cloud, IoT, and AI at Huawei Training Centre.',
    techs: ['Back End', 'Cloud', '5G'],
  },
  {
    title: 'Electrical Controls Engineer Co-op',
    company: 'Dynamic Attractions',
    start: '09/2017',
    end: '12/2018',
    desc: 'Developed software via Python for testing and data collection of complex electrical and computer systems. Utilized MATLAB/Simulink in the design and testing of large-scale control systems.',
    techs: ['Robotics', 'Back End', 'Data Analysis', 'Project Mgmt.'],
  },
  {
    title: 'Research Assistant',
    company: 'Gov. of Alberta, Dept. of Economic Development',
    start: '06/2016',
    end: '09/2016',
    desc: 'Collected market research and analyzed data to identify niche investment and trade opportunities in international markets. Marketed Albertan exports and technology to attract foreign investment and trade in various technology sectors.',
    techs: ['Data Analysis', 'Economics', 'Project Mgmt.'],
  },
];
