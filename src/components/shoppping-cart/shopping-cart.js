import React from 'react';
import { connect } from 'react-redux'
import './shopping-cart.css'
import {addBookToCart, removeAllBooksFromCart, removeBookFromCart} from '../../actions'

const ShoppingCart = (props) => {
    const {
        onIncrease,
        onDecrease,
        onDelete,
        items,
        cartTotal
    } = props
    const renderRow = (item, index) => {
        const { title, count, price, id } = item
        return <tr key={id}>
            <td>{index + 1}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>{price}</td>
            <td>
                <button
                    className={'btn btn-outline-warning'}
                    onClick={() => onDecrease(id)}
                >
                    <i className={'fa fa-minus-circle'} />
                </button>
                <button
                    className={'btn btn-outline-success'}
                    onClick={() => onIncrease(id)}
                >
                    <i className={'fa fa-plus-circle'} />
                </button>
                <button
                    className={'btn btn-outline-danger'}
                    onClick={() => onDelete(id)}
                >
                    <i className={'fa fa-trash-o'} />
                </button>
            </td>
        </tr>
    }
    return (
        <div className={'shopping-cart'}>
            <h2>Your Order</h2>
            <table className={'table'}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>
            <div className={'total'}>
                Total: ${cartTotal}
            </div>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart }) => {
    const { items, cartTotal } = shoppingCart
    console.log({items})
    return { items, cartTotal }
}

const mapDispatchToProps = {
    onIncrease: addBookToCart,
    onDelete: removeAllBooksFromCart,
    onDecrease: removeBookFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
