import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { Link, withRouter } from "react-router-dom";
import ButtonAsLink from "./ButtonAsLink";

import logo from '../img/logo.svg';

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const UserState = styled.div`
  margin-left: auto;
`;

// local query to see if user is logged in or not
// Refer: https://www.apollographql.com/docs/react/local-state/local-state-management/
const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`;

const Header = props => {
    // query hook for user logged in state
    const { data, client } = useQuery(IS_LOGGED_IN);

    return (
        <HeaderBar>
            <img src={logo} alt="JANTA Logo" height='40' />
            <LogoText>JANTA</LogoText>
            {/* If logged in, display logout link, else display sign in link */}
            <UserState>
                {
                    data.isLoggedIn ? (
                        <ButtonAsLink
                            onClick={() => {
                                // remove the token
                                localStorage.removeItem('token');
                                // clear apollo cache
                                client.resetStore();
                                // // update the local state
                                // client.cache.writeData({ data: { isLoggedIn: false } });
                                // redirect to home page
                                props.history.push('/');
                            }}
                        >Log Out</ButtonAsLink>
                    ) : (
                        <p>
                            <Link to='/signin'>Sign In</Link> or{'  '}
                            <Link to='/signup'>Sign Up</Link>
                        </p>
                    )
                }
            </UserState>
        </HeaderBar>
    );
}

export default withRouter(Header);