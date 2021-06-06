import React, {useEffect} from "react";
import { useMutation, useApolloClient, gql } from "@apollo/client";

import UserForm from "../components/UserForm";

const SIGNIN_USER = gql`
    mutation signIn($email: String, $password: String!) {
        signIn(email: $email, password: $password)
    }
`;

const SignIn = props => {
    useEffect(() => {
        document.title = 'Sign In - JANTA';
    });

    const client = useApolloClient();
    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, { onCompleted: data => {
            localStorage.setItem('token', data.signIn);
            client.cache.writeData({ data: { isLoggedIn: true } });
            props.history.push('/');
        } });

    return (
        <React.Fragment>
            <UserForm action={signIn} formType='signin' />
            {
                loading && <p>Loading...</p>
            }
            {
                error && <p>Sorry, error occured while signing in!</p>
            }
        </React.Fragment>
    );
}

export default SignIn;