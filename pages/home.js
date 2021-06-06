import React from "react";
import { useQuery, gql } from "@apollo/client";

import NoteFeed from "../components/NoteFeed";
import Button from "../components/Button";

const GET_NOTES = gql`
    query NoteFeed($cursor: String) {
        noteFeed(cursor: $cursor) {
            cursor
            hasNextPage
            notes {
                id
                createdAt
                content
                favoriteCount
                author {
                    username
                    id
                    avatar
                }
            }
        }
    }
`;

const Home = () => {
    // query hook
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
    // if the data is loading, display loading message
    if (loading) return <p>Loading....</p>;
    // if error, display error message
    if (error) return <p>Sorry and error occured!</p>
    // if successful return the data in UI
    return (
        <>
            <NoteFeed notes={data.noteFeed.notes} />
            {/* Only show this button if hasNextPage is true */}
            {
                // This executes data.noteFeed.hasNextPage first and if it is true then renders Button
                // Refer: https://reactjs.org/docs/conditional-rendering.html
                data.noteFeed.hasNextPage
                &&
                <Button
                    onClick={() =>
                        fetchMore({
                            variables: {
                                cursor: data.noteFeed.cursor
                            },
                            updateQuery: (previousResult, { fetchMoreResult }) => {
                                return {
                                    noteFeed: {
                                        cursor: fetchMoreResult.noteFeed.cursor,
                                        hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                                        // append new notes to old ones
                                        notes: [
                                            ...previousResult.noteFeed.notes,
                                            ...fetchMoreResult.noteFeed.notes
                                        ],
                                        __typename: 'noteFeed'
                                    }
                                }
                            }
                        }
                    )}
                >Load More</Button>
            }
        </>
    );
}

export default Home;