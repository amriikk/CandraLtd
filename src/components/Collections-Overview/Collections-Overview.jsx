import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Collection from '../Collection/Collection';
import { selectCollections } from '../../redux/shop/shop.selectors';

import './Collections-Overview.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        { collections.map( ({ id, ...otherCollectionProps }) => (
            <Collection key={id} { ...otherCollectionProps } />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);