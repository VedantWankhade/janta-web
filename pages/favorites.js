import React, { useEffect } from "react";

const Favorites = () => {
    useEffect(() => {
        // update the document title
        document.title = 'Favorites - JANTA';
    });

    return (
        <div>
            <h1>JANTA</h1>
            <p>These are my favorite notes.</p>
        </div>
    );
}

export default Favorites;