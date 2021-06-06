import React from "react";
import ReactMarkdown from "react-markdown";
// to properly format date
import { formatRelative } from 'date-fns';
import styled from "styled-components";

// keep notes less wider than 800px
const StyledNote = styled.article`
  max-width: 800px;
  padding: 8px;
  margin: 0 auto
  //margin: 0 auto 55px;
  //box-shadow: 3px 3px 5px 6px #ccc;
  //border-radius: 3px;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

const MetaInfo = styled.div`
    padding-right: 1em;
`;

const UserActions = styled.div`
  margin-left: auto;
`;

const Note = ({ note }) => {
    return (
        <StyledNote>
            <MetaData>
                <MetaInfo>
                    <img src={note.author.avatar} alt={`${note.author.username} avatar`} height='50px' />
                </MetaInfo>
                <MetaInfo>
                    <em>by</em> {note.author.username} <br />
                    {formatRelative(new Date(note.createdAt), new Date())}
                </MetaInfo>
                <UserActions>
                    <em>Favorites:</em> {note.favoriteCount}
                </UserActions>
            </MetaData>
            <ReactMarkdown>
                {note.content}
            </ReactMarkdown>
        </StyledNote>
    );
}

export default Note;