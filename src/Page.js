import React, { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import LoginPage from './Login';
import SignUpPage from './Signup';
import ForgotPasswordPage from './Forgot';
import App from './App';
const Page=()=>
{
    return(
        <>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/sign' element={<SignUpPage/>}/>
            <Route path='/forgot' element={<ForgotPasswordPage/>}/>
            <Route path='/home' element={<App/>}/>
        </Routes>
        </>
    )
}
export default Page;