import { Box } from '@mui/material';
import TopBar from 'components/appBar/TopBar';
import React from 'react'
import { Outlet } from 'react-router-dom';

/**
 * @description <br/>
 * \<TopBar/>, \<Outlet/>을 순서대로 갖는 레이아웃 태그이다.
 * @type <br/>
 * paired Tags
 */
const Layout = () => {
    return (
        <Box sx={{backgroundColor: "rgb(0, 255, 0)"}}>
            <TopBar/>
            <Outlet/>
        </Box>
    );
};

export default Layout;