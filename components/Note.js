import React from "react";
import ReactMarkdown from "react-markdown";

const Note = ({ note }) => {
    return (
        <article>
            <img src={note.author.avatar} alt={`${note.author.username} avatar`} height='50px' />
            {'  '}
            {note.author.username} {note.createdAt} {note.favoriteCount}
            {'  '}
            <ReactMarkdown>
                {note.content}
            </ReactMarkdown>
        </article>
    );
}

export default Note;