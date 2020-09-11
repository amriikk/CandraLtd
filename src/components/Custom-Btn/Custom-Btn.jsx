import React from 'react';

import './Custom-Btn.scss'

const CustomBtn = ({ children, ...otherProps }) => (
    <button className='custom-btn' {...otherProps}>
        {children}
    </button>
)

export default CustomBtn;