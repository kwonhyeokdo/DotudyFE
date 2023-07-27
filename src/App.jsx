import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'components/pages/main/Main';
import Layout from 'components/layout/Layout';
import SignUp from 'components/pages/sign/SignUp';

const App = () => {
    return (
        <CssBaseline>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Main/>}/>
                        <Route path="signup" element={<SignUp/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </CssBaseline>
    )
};

export default App;