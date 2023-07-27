import { Box } from '@mui/material';
import TopBar from 'components/appBar/TopBar';
import TestA from 'components/parts/TestA';
import React from 'react'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <TestA>
            <Box sx={{backgroundColor: "rgb(80, 80, 80)"}}>
                <TopBar/>
                <Outlet/>
            </Box>
        </TestA>
    );
};

export default Layout;