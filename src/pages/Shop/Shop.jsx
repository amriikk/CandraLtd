import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/Collections-Overview/Collections-Overview';
import CategoryPage from '../CollectionPage/CollectionPage';


const ShopPage = ({ match }) => {
    console.log(match);
    return (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:categoryID`} component={CategoryPage} />
    </div> 
)};

export default ShopPage;