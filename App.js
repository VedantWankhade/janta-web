import React from "react";
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    ApolloProvider,
    createHttpLink
} from "@apollo/client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from "apollo-link-context";

import GlobalStyle from "./components/GlobalStyle";
import Pages from "./pages";

// configure our API URI and cache
// We don't need to import and configure dotenv as parcel automatically does it
const API_URI = process.env.API_URI;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri: API_URI });

// check for a token and return the headers to the context
const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem('token') || ''
        }
    }
});

// configure apollo client
const client = new ApolloClient({
    // now this link has header which has authorization whose value is user JWT token
    link: authLink.concat(httpLink),
    cache,
    resolvers: {},
    connectToDevTools: true
});

// check for local token
const data = {
    isLoggedIn: !!localStorage.getItem('token')
};

// write the cache data on initial load
cache.writeData({ data });

const App = () => {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Pages />
        </ApolloProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));