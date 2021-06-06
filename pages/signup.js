import React, { useEffect } from "react";
import styled from "styled-components";

import Button from "../components/Button";

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
  box-shadow: 3px 3px 5px 6px #ccc;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }
  
  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

const SignUp = props => {
    useEffect(() => {
        document.title = 'Sign Up - JANTA';
    });

    return (
        <Wrapper>
            <h2>Sign Up</h2>
            <Form>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                />
                <label htmlFor="email">Email:</label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                />
                <label htmlFor="password">Password:</label>
                <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
            </Form>
        </Wrapper>
    );
}

export default SignUp;