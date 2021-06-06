import React from "react";
import Note from "./Note";

const NoteFeed = ({ notes }) => {
    return (
        <div>
            {notes.map(note => <
                div key={note.id}>
                    <Note note={note} />
                </div>)
            }
        </div>
    );
}

export default NoteFeed;