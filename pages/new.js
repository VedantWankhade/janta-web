import React, { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";

import NoteForm from '../components/NoteForm';

import { GET_NOTES, GET_MY_NOTES } from "../gql/query";

const NEW_NOTE = gql`
    mutation newNote($content: String!) {
        newNote(content: $content) {
            id
            content
            createdAt
            favoriteCount
            favoritedBy {
                id
                username
            }
            author {
                id
                username
            }
        }
    }
`;

const NewNote = props => {
    useEffect(() => {
        document.title = 'New Note - JANTA';
    });

    const [createNote, { loading, error }] = useMutation(NEW_NOTE, {
        // refetch notes to prevent getting old notes from cache
        refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
        onCompleted: data => {
            props.history.push(`note/${data.newNote.id}`);
        } })

    return  (
        <>
            {
                loading && <p>Loading...</p>
            }
            {
                error && <p>Error saving note</p>
            }
            <NoteForm action={createNote} />
        </>
    );
}

export default NewNote;