import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "./home";
import MyNotes from "./myNotes";
import Favorites from "./favorites";
import NotePage from "./note";

const Pages = () => {
    return (
        <Router>
            {/* Wrap routes within the 'Layout' component */}
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/myNotes' component={MyNotes} />
                <Route path='/favorites' component={Favorites} />
                <Route path='/note/:id' component={NotePage} />
            </Layout>
        </Router>
    );
}

export default Pages;