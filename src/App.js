import React from 'react';
import { ChakraProvider, Box, Fade, extendTheme } from '@chakra-ui/react';
import Homepage from './pages/Homepage';

function App() {
  // set to default dark mode
  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  };

  // render theme
  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" flexBasis={['auto', '45%']}>
        <Fade in>
          <Homepage />
        </Fade>
      </Box>
    </ChakraProvider>
  );
}

export default App;
