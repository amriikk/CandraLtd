import React from 'react'

import './Menu-Item.scss'

const MenuItem = ({ title, imageUrl, size }) => (
    <div 
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={`${size} menu-item`}
    >
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOW NOW</span>
        </div>
    </div>
);

export default MenuItem;