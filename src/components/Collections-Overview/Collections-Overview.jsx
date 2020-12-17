import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { Collection } from '../Collection/Collection';

import './CollectionOverview.scss';

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