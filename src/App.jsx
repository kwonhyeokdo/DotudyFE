import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'components/pages/main/Main';
import Layout from 'components/layout/Layout';
import SignUp from 'components/pages/sign/SignUp';
import InitLoad from 'components/parts/InitLoad';

const App = () => {
    return (
        <CssBaseline>
            <InitLoad>
                <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<Layout/>}>
                                <Route path="/" element={<Main/>}/>
                                <Route path="signup" element={<SignUp/>}/>
                            </Route>
                    </Routes>
                </BrowserRouter>
            </InitLoad>
        </CssBaseline>
    )
};

export default App;