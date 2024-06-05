import React from 'react';
import {
  ChakraProvider,
  Box,
  SimpleGrid,
  theme,
} from '@chakra-ui/react';

function App() {
  const boxes = Array.from({ length: 500 }, (_, index) => (
    <Box key={index} bg='tomato' height='40px'></Box>
  ));

  return (
    <ChakraProvider theme={theme}>
      <SimpleGrid
        columns={{ base: 4, sm: 5, md: 6, lg: 10, xl: 25 }}
        spacing='1px'
      >
        {boxes}
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;

