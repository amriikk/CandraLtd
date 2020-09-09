import React, { Component } from 'react';
import SHOP_DATA from './shop.data';

class ShopPage extends Component {
    constructor(props) {
        super();

        this.state = {
            collection: SHOP_DATA;
        }
    }
    render() {
        <div>SHOP PAGE</div>
    }
}

export default ShopPage;