import React from "react";
import {BookServiceConsumer} from "../bookservice-context";

export const withBookService = () => (Wrapped) => {
    return (props) => <BookServiceConsumer>
        {(service) => {
            return <Wrapped service={service} {...props}/>
        }}
    </BookServiceConsumer>
}

