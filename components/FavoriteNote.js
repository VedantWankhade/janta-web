import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import ButtonAsLink from "./ButtonAsLink";

import { TOGGLE_FAVORITE } from "../gql/mutation";
import { GET_MY_FAVORITES } from "../gql/query";

const FavoriteNote = props => {
    const [count, setCount] = useState(props.favoriteCount);
    const [favorited, setFavorited] = useState(
        // check if note is already in user favorites
        props.me.favorites.filter(note => note.id === props.noteId).length > 0
    );

    const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
        variables: {
            id: props.noteId
        },
        refetchQueries: [{ query: GET_MY_FAVORITES }]
    })

    return (
        <>
            {
                favorited ? (
                    <ButtonAsLink
                        onClick={() => {
                            setFavorited(false);
                            setCount(count - 1);
                        }}
                    >
                        Remove Favorite
                    </ButtonAsLink>
                ) : (
                    <ButtonAsLink
                        onClick={() => {
                            setFavorited(true);
                            setCount(count + 1);
                        }}
                    >
                        Add Favorite
                    </ButtonAsLink>
                )
            }: {count}
        </>
    );
}

export default FavoriteNote;