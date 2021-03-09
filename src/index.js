import React from 'react'
import { render } from 'react-dom'
import App from "./components/app";
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import ErrorBoundry from "./components/error-boundry";
import {BookServiceContext} from "./components/bookservice-context";

render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookServiceContext>
                <Router>
                    <App />
                </Router>
            </BookServiceContext>
        </ErrorBoundry>
    </Provider>, document.getElementById('root'))
