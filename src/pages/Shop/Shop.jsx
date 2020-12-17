import React from 'react';
import { createStructuredSelector } from 'reselect'
import Collection from '../../components/Collection/Collection';
import { selectCollections} from '../../redux/shop/shop.selectors';


const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        { collections.map( ({ id, ...otherCollectionProps }) => (
            <Collection key={id} { ...otherCollectionProps } />
        ))}
    </div> 
);

export default ShopPage;