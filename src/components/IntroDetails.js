import { Box, SimpleGrid } from '@chakra-ui/react';
import {
  FcAcceptDatabase,
  FcScatterPlot,
  FcCollaboration,
  FcCircuit,
  FcBullish,
  FcBiotech,
} from 'react-icons/fc';

import FeatureCard from './FeatureCard';

export default function IntroDetails() {
  return (
    <Box p={4}>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 2, xl: 3 }}
        spacing={10}
        marginLeft={4}
        marginRight={4}
      >
        <FeatureCard
          icon={FcAcceptDatabase}
          title={'Back End Dev'}
          text="Skilled with databases, cloud, and back end technologies like NodeJS, Express, Docker, and Kubernetes for the development and deployment of APIs and applications."
        />
        <FeatureCard
          icon={FcScatterPlot}
          title={'A.I.'}
          text={
            'Experienced with Python, Keras, and TensorFlow to solve supervised and unsupervised problems in areas like NLP and computer vision using various architectures.'
          }
        />
        <FeatureCard
          icon={FcCollaboration}
          title={'Front End Dev'}
          text={
            'Experience in ReactJS and Figma to design and implement great user interfaces and experiences. Additional experience with Unity for augmented reality applications.'
          }
        />

        <FeatureCard
          icon={FcCircuit}
          title={'Engineering'}
          text={
            'Strong engineering design and systems architecture thinking with implemented projects in an array of sectors including software, biotech, IoT, telecom, and robotics.'
          }
        />
        <FeatureCard
          icon={FcBullish}
          title={'Business & Leadership'}
          text={
            'Proven leadership spearheading projects to exceed stakeholder objectives and developing solutions that optimize costs and revenue to benefit company bottom lines.'
          }
        />

        <FeatureCard
          icon={FcBiotech}
          title={'Biotech'}
          text={
            'Awarded as a global biotech leader by Global Biotech Revolution. Led 90+ students at UBC to develop 8+ biomedical projects collaborating with medical organizations.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
