import React from 'react';
import { Route, Switch } from 'react-router-dom'
import {Cart, Home} from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
    return (
        <main className={'container'} role={'main'}>
            <ShopHeader numItems={5} total={200}/>
            <Switch>
                <Route path={'/'} component={Home} exact/>
                <Route path={'/cart'} component={Cart} />
            </Switch>
        </main>
    );
};

export default App;
