import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <StyledNavigation>
            <h1><Link id="Logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                </li>
            </ul>
        </StyledNavigation>
    );

};

const StyledNavigation = styled.div`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;

    a{
        color: white;
        text-decoration: none;
    }

    ul{
        display: flex;
        list-style: none;
        gap: 2rem;
    }

    #Logo{
        font-size: 1.8rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
`;

export default Navigation;