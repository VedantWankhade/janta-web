import React, { useEffect, useState } from "react";
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
    // set default state of the form
    const [values, setValues] = useState();

    // update the state when a user types in form
    const onChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        document.title = 'Sign Up - JANTA';
    });

    return (
        <Wrapper>
            <h2>Sign Up</h2>
            <Form
                onSubmit={event => {
                        event.preventDefault();
                        console.log(values);
                }}
            >
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    onChange={onChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                />
                <button type="submit">Submit</button>
            </Form>
        </Wrapper>
    );
}

export default SignUp;