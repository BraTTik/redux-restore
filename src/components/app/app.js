import React, { useContext } from 'react';
import {bookStoreServiceContext} from "../bookservice-context";
import { Route, Switch } from 'react-router-dom'
import {Cart, Home} from "../pages";

const App = (props) => {
    const service = useContext(bookStoreServiceContext)
    return (
        <Switch>
            <Route path={'/'} component={Home} exact/>
            <Route path={'/cart'} component={Cart} />
        </Switch>
    );
};

export default App;
