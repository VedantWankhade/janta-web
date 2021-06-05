import React, { useEffect } from "react";

const MyNotes = () => {
    useEffect(() => {
        // update document title
        document.title = 'My Notes - JANTA';
    });

    return (
        <div>
            <h1>JANTA</h1>
            <p>These are my notes.</p>
        </div>
    );
}

export default MyNotes;