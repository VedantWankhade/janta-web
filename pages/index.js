import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home";
import MyNotes from "./myNotes";
import Favorites from "./favorites";

const Pages = () => {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/myNotes' component={MyNotes} />
            <Route path='/favorites' component={Favorites} />
        </Router>
    );
}

export default Pages;