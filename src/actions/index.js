export const booksLoaded = (newBooks) => {
    return {type: 'BOOKS_LOADED', payload: newBooks}
}

export const booksRequested = () => {
    return { type: 'BOOKS_REQUESTED' }
}

export const booksError = (payload) => {
    return { type: 'BOOKS_ERROR', payload}
}

export const fetchBooks = (service, dispatch) => () => {
    dispatch(booksRequested())
    service.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(error => dispatch(booksError(error)))
}

export const addBookToCart = (id) => {
    return { type: 'ADD_BOOK_TO_CART', payload: id }
}

export const removeBookFromCart = (id) => {
    return { type: 'REMOVE_BOOK_FROM_CART', payload: id}
}

export const removeAllBooksFromCart = (id) => {
    return { type: 'REMOVE_ALL_BOOKS_FROM_CART', payload: id}
}
