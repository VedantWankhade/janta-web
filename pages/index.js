import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import Layout from "../components/Layout";
import Home from "./home";
import MyNotes from "./myNotes";
import Favorites from "./favorites";
import NotePage from "./note";
import SignUp from "./signup";
import SignIn from "./signin";
import NewNote from "./new";

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`;

const Pages = () => {
    return (
        <Router>
            {/* Wrap routes within the 'Layout' component */}
            <Layout>
                <Route exact path='/' component={Home} />
                <PrivateRoute path='/myNotes' component={MyNotes} />
                <PrivateRoute path='/favorites' component={Favorites} />
                <PrivateRoute path='/new' component={NewNote} />
                <Route path='/note/:id' component={NotePage} />
                <Route path='/signup' component={SignUp} />
                <Route path='/signin' component={SignIn} />
            </Layout>
        </Router>
    );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { loading, error, data } = useQuery(IS_LOGGED_IN);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Sorry, an error occured!</p>
    // else redirtect to sign in page
    return (
        <Route
            {...rest}
            render={props => data.isLoggedIn === true ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: '/signin',
                    state: { from: props.location }
                    }}
                />
            )
            }
        />
    );
}

export default Pages;