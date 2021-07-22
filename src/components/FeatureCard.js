import {
  Text,
  Stack,
  Flex,
  Icon,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, text, icon }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
      <Box
        p={8}
        shadow="xl"
        borderWidth="2px"
        color={useColorModeValue('gray.800', 'white')}
        zIndex={1}
        alignContent="center"
      >
        <Stack align="center" paddingBottom={4}>
          <Flex
            w={18}
            h={18}
            align={'center'}
            justify={'center'}
            color={'ghost'}
            rounded={'full'}
            bg={'gray.100'}
            mb={5}
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Icon as={icon} w={10} h={10} />
            </motion.div>
          </Flex>
          <Text
            fontWeight={700}
            fontSize="l"
            align="center"
            textTransform="uppercase"
            color="blue.500"
          >
            {title}
          </Text>

          <Text
            color={useColorModeValue('dark', 'light')}
            fontSize="md"
            noOfLines={{ base: 10, sm: 5, md: 5, lg: 5, xl: 6 }}
            align={'left'}
          >
            {text}
          </Text>
        </Stack>
      </Box>
    </motion.div>
  );
};

export default FeatureCard;
