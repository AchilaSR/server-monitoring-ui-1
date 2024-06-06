import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  SimpleGrid,
  theme,
  Tooltip,
} from '@chakra-ui/react';
import axios from 'axios';

function Box_dashboard() {
  const [data, setData] = useState([]);
  const [hoveredServer, setHoveredServer] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://monitoring.uniconnect.io/api/getmain');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleMouseEnter = (server) => {
    setHoveredServer(server);
  };

  const handleMouseLeave = () => {
    setHoveredServer(null);
  };

  return (
    <ChakraProvider theme={theme}>
      <SimpleGrid
        columns={{ base: 15, sm: 10, md: 15, lg: 20, xl: 25 }}
        spacing='3px'
      >
        {data.map((server) => (
          <Tooltip
            key={server.Server_id}
            label={
              <>
                <p><strong>Server Name:</strong> {server.server_name}</p>
                <p><strong>RAM:</strong> {server.ram}%</p>
                <p><strong>CPU:</strong> {server.cpu}%</p>
                <p><strong>Storage:</strong> {server.storage}%</p>
                <p><strong>Public IP:</strong> {server.public_ip}</p>
              </>
            }
            isOpen={hoveredServer === server}
            placement="top"
            bg="gray.700"
            color="white"
            p="5px"
            borderRadius="5px"
            fontSize="12px"
          >
            <Box
              bg={server.service_status === 1 ? 'green' : 'red'}
              height='20px'
              display='flex'
              alignItems='center'
              justifyContent='center'
              onMouseEnter={() => handleMouseEnter(server)}
              onMouseLeave={handleMouseLeave}
              borderRadius="3px"
              cursor='pointer'
            />
          </Tooltip>
        ))}
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default Box_dashboard;
