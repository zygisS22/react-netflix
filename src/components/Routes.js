import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"




const Routes = () => {


    return (
        <div className="background-app">
            <Header />
            <Switch>
                <Route component={Home} exact path="/" />
            </Switch>

            <Footer />
        </div>
    )
}


export default Routes;