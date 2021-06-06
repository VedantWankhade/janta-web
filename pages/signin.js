import React, {useEffect} from "react";

const SignIn = props => {
    useEffect(() => {
        document.title = 'Sign In - JANTA';
    });

    return (
        <div>
            <p>Sign in page</p>
        </div>
    );
}

export default SignIn;