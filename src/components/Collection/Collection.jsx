import React from 'react';
import CollectionItem from '../Collection-Item/Collection-Item'

import './Collection.scss'

const Collection = ({ title, items }) => (
    <div className='collection'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className='preview'>
            {items
                .filter( (item, idx) => idx < 4)
                .map( (item) => (
                    <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
);

export default Collection;