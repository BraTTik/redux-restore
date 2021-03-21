import React, {Fragment} from 'react';
import BookList from "../book-list";
import ShoppingCart from "../shoppping-cart";

const Home = () => {
    return (
        <Fragment>
            <BookList />
            <ShoppingCart />
        </Fragment>
    );
};

export default Home;
