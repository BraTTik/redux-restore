import React, { createContext } from 'react'
import BookstoreService from "../../services/bookstore-service";

const Context = createContext({})
const service = new BookstoreService()

export const BookServiceContext = (props) => {

    return <Context.Provider value={service}>
        { props.children }
    </Context.Provider>
}

export const bookStoreServiceContext = Context
export const BookServiceConsumer = Context.Consumer
export const BookServiceProvider = Context.Provider
