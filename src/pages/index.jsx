import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';

const Home = () => {
    return (
        <Layout title="DashBoard" pagename="DashBoard">
            <SimpleGrid columns={[1, 2, 3, null, 6]} spacing={10}>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
            </SimpleGrid>
        </Layout>
    );
};

export default Home;
