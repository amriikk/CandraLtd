import React from 'react';
// import CollectionItem from '../../components/Collection-Item/Collection-Item';

import './CollectionPage.scss';

const CollectionPage = ({ match }) => {
    console.log(match.params.collectionId)
    return (
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
    )
};

export default CollectionPage;
