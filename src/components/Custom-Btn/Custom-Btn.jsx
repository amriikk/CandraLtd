import React from 'react';

import './Custom-Btn.scss'

const CustomBtn = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-btn`} 
    {...otherProps}
    >
        {children}
    </button>
)

export default CustomBtn;