import React, { Component } from 'react';
import Collection from '../../components/Collection/Collection'

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        { collections.map( ({ id, ...otherCollectionProps }) => (
            <Collection key={id} { ...otherCollectionProps } />
        ))}
    </div> 
);

export default ShopPage;