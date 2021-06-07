import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { GET_ME } from "../gql/query";

const NoteUser = props => {
    const { loading, error, data } = useQuery(GET_ME);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <>
            Favorites: {props.note.favoriteCount}
            <br />
            {
                data.me.id === props.note.author.id && (
                    <>
                        <Link to={`/edit/${props.note.id}`}>Edit</Link>
                    </>
                )
            }
        </>
    );
}

export default NoteUser;