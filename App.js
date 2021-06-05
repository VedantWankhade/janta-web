import React from "react";
import ReactDOM from 'react-dom';

import GlobalStyle from "./components/GlobalStyle";
import Pages from "./pages";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Pages />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));