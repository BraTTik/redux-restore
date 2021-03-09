import React, { useEffect, useContext } from 'react';
import './book-list.css'
import BookListItem from "../book-list-item";
import {useDispatch, useSelector} from "react-redux";
import {bookStoreServiceContext} from "../bookservice-context";
import {booksLoaded} from "../../actions";

const BookList = () => {
    const books = useSelector(state => state.books) ?? []
    const dispatch = useDispatch()
    const service = useContext(bookStoreServiceContext)
    useEffect(() => {
        const loadedBooks = service.getBooks()
        dispatch(booksLoaded(loadedBooks))
    }, [])
    return (
        <ul>
            { books.map(book => (
                <li key={book?.id + '-book'}>
                    <BookListItem book={book}/>
                </li>
            ))}
        </ul>
    );
};

export default BookList;
