import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "./home";
import MyNotes from "./myNotes";
import Favorites from "./favorites";
import NotePage from "./note";
import SignUp from "./signup";
import SignIn from "./signin";

const Pages = () => {
    return (
        <Router>
            {/* Wrap routes within the 'Layout' component */}
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/myNotes' component={MyNotes} />
                <Route path='/favorites' component={Favorites} />
                <Route path='/note/:id' component={NotePage} />
                <Route path='/signup' component={SignUp} />
                <Route path='/signin' component={SignIn} />
            </Layout>
        </Router>
    );
}

export default Pages;