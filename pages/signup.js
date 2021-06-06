import React, { useEffect, useState } from "react";
import { useMutation, useApolloClient, gql } from "@apollo/client";

import UserForm from "../components/UserForm";

const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`;

const SignUp = props => {
    useEffect(() => {
        document.title = 'Sign Up - JANTA';
    });

    // apollo client hook to store status of user logged in or not
    // This client is the same client we initialized in App.js
    const client = useApolloClient();
    // add the mutation hook
    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, { onCompleted: data => {
            // store recieved JWT in localStorage
            localStorage.setItem('token', data.signUp);
            // update the state
            client.cache.writeData({ data: { isLoggedIn: true } });
            // redirect user to homepage
            props.history.push('/');
    }})

    return (
        <>
            <UserForm action={signUp} formType='signup' />
            {/* If data is loading, display loading message */}
            {
                loading && <p>Loading...</p>
            }
            {/* if error, show error message */}
            {
                error && <p>Sorry, an error accured signin up!</p>
            }
        </>
    );
}

export default SignUp;