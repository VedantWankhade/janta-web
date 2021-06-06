import React from "react";
import styled from 'styled-components';

import Note from "./Note";

const NoteWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding: 1.5em;
  box-shadow: 3px 3px 5px 6px #ccc;
`;

const NoteFeed = ({ notes }) => {
    return (
        <div>
            {notes.map(note =>
                <NoteWrapper key={note.id}>
                    <Note note={note} />
                </NoteWrapper>)
            }
        </div>
    );
}

export default NoteFeed;