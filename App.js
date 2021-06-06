import React from "react";
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import GlobalStyle from "./components/GlobalStyle";
import Pages from "./pages";

// We don't need to import and configure dotenv as parcel automatically does it
// configure our API URI and cache
const API_URI = process.env.API_URI;
const cache = new InMemoryCache();

// configure apollo client
const client = new ApolloClient({
    uri: API_URI,
    cache,
    connectToDevTools: true
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Pages />
        </ApolloProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));