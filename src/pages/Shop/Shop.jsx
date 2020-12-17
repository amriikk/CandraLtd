import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import Collection from '../../components/Collection/Collection';
import { selectShoptItem} from '../../redux/shop/shop.selectors';


const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        { collections.map( ({ id, ...otherCollectionProps }) => (
            <Collection key={id} { ...otherCollectionProps } />
        ))}
    </div> 
);

const mapStateToProps = createStructuredSelector({
    
})

export default ShopPage;