import React from 'react';
import './shop-header.css'
import {Link} from "react-router-dom";

const ShopHeader = ({numItems, total}) => {
    return (
        <div className={'shop-header'}>
            <h1><Link to={'/'} className={'text-dark logo'}>Re Store!</Link></h1>
            <Link to={'/cart'} className={'shopping-cart text-dark'}>
                <i className={'cart-icon fa fa-shopping-cart'} />
                {numItems} items (${total})
            </Link>
        </div>
    );
};

export default ShopHeader;
