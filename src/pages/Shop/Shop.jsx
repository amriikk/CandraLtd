import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/Collections-Overview/Collections-Overview';
import CollectionPage from '../CollectionPage/CollectionPage';


const ShopPage = ({ match }) => {
    console.log(match);
    return (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div> 
)};

export default ShopPage;