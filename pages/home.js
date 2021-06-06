import React from "react";
import { useQuery, gql } from "@apollo/client";
// to render markdown
import ReactMarkdown from "react-markdown";

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
    // if successfull return the data in UI
    return (
        <div>
            {
                data.noteFeed.notes.map(note =>
                    <article key={note.id}>
                        <img src={note.author.avatar} alt={`${note.author.username} avatar`} height='50px' />
                        {'  '}
                        {note.author.username} {note.createdAt} {note.favoriteCount}
                        {'  '}
                        <ReactMarkdown>
                            {note.content}
                        </ReactMarkdown>
                        <hr/>
                        {'  '}
                    </article>)
            }
        </div>
    );
}

export default Home;