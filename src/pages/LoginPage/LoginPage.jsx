import React from 'react';
import SignIn from '../../components/Sign-In/Sign-In'
import SignUp from '../../components/Sign-Up/Sign-Up';

import './LoginPage.scss'

const LoginPage = () => (
    <div className='login'>
        <SignIn />
        <SignUp />
    </div>
)

export default LoginPage;