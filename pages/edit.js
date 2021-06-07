import React from "react";
import { useQuery, useMutation } from "@apollo/client";

import NoteForm from "../components/NoteForm";

import { GET_NOTE, GET_ME } from "../gql/query";
import { EDIT_NOTE } from '../gql/mutation';

const EditNote = props => {
    const id = props.match.params.id;
    // fetch the note
    const { loading, data, error } = useQuery(GET_NOTE, { variables: { id } });
    // fetch current users data
    const { data: userdata } = useQuery(GET_ME);
    const [ editNote ] = useMutation(EDIT_NOTE, {
        variables: {
            id
        },
        onCompleted: () => {
            props.history.push(`/note/${id}`)
        }
    })
    if (loading) return 'Loading...';
    if (error) return 'Error, retrieving note!';
    if (userdata.me.id !== data.note.author.id) {
        return <p>You do not have permission to edit this note.</p>;
    }
    return <NoteForm content={data.note.content} action={editNote} />;
}

export default EditNote;