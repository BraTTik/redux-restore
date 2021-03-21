const initialSate = {
    items: [],
    cartTotal: 0,
}

const updateCartItems = (cartItems, item, index) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1)
        ]
    }
    if (index < 0) {
        return [
            ...cartItems,
            item
        ]
    } else {
        return [
            ...cartItems.slice(0, index),
            item,
            ...cartItems.slice(index + 1)
        ]
    }
}

const updateItem = (book, item = {}, quantity) => {
    const { id = book.id, title = book.title, price = 0, count = 0 } = item

    return {
        id,
        title,
        price: price + quantity * book.price,
        count: count + quantity,
    }
}

const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { items } } = state
    const book = books.find(({id}) => id === bookId)
    const foundIndex = items.findIndex(({id}) => id === bookId)
    const item = items[foundIndex]
    const newItem = updateItem(book, item, quantity)
    return {
        ...state,
        items: updateCartItems(items, newItem, foundIndex),
    }
}

export const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return initialSate
    }
    switch (action.type) {
        case 'ADD_BOOK_TO_CART': {
            return updateOrder(state, action.payload, 1)
        }
        case 'REMOVE_BOOK_FROM_CART': {
            return updateOrder(state, action.payload, -1)
        }
        case 'REMOVE_ALL_BOOKS_FROM_CART': {
            const item = state.shoppingCart.items.find(({id}) => id === action.payload)
            return updateOrder(state, action.payload, -item.count)
        }
        default:
            return state.shoppingCart
    }
}
