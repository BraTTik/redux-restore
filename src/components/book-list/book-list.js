import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import './book-list.css'
import BookListItem from "../book-list-item";
import {addBookToCart, fetchBooks} from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import {compose} from "../../utils";
import {withBookService} from "../hoc";

const BookList = ({books, onAddToCart}) => {
    return (
        <ul className={'book-list'}>
            { books.map(book => (
                <li key={book?.id + '-book'}>
                    <BookListItem book={book} onAddToCart={() => onAddToCart(book.id)}/>
                </li>
            ))}
        </ul>
    )
}

const BookListContainer = (props) => {
    const {
        books,
        loading,
        error,
        fetchBooks,
        onAddToCart,
    } = props

    useEffect(() => {
        fetchBooks()
    }, [fetchBooks])

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }

    return <BookList books={books} onAddToCart={onAddToCart}/>
};

const mapStateToProps = ({ bookList }) => {
    const { books, loading, error } = bookList

    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { service } = ownProps
    return {
        fetchBooks: fetchBooks(service, dispatch),
        onAddToCart: (id) => dispatch(addBookToCart(id))
    }
}

export default compose(
    withBookService(),
    connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer)
