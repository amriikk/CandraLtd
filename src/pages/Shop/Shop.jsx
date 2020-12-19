import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/Collections-Overview/Collections-Overview';


const ShopPage = ({ match }) => {
    console.log(match);
    return (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
    </div> 
)};

export default ShopPage;