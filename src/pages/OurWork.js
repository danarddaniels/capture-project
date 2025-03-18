import React from "react";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Styles
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from "../animation";
// import { useScroll } from "../components/useScroll";
// import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  return( 
    <StyledWork>
        <StyledMovie>
            <h2> The Athlete </h2>
            <div className="line"></div>
            <Link>
                <img src={athlete} alt="athlete" />
            </Link>
        </StyledMovie>
        <StyledMovie>
            <h2> The Racer </h2>
            <div className="line"></div>
            <Link>
                <img src={theracer} alt="the racer" />
            </Link>
        </StyledMovie>
        <StyledMovie>
            <h2> Good Times </h2>
            <div className="line"></div>
            <Link>
                <img src={goodtimes} alt="good times" />
            </Link>
        </StyledMovie>
    </StyledWork>
  )
}

const StyledWork = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background-color: white;
    h2{
        padding: 1rem 0rem;
    }
`;

const StyledMovie = styled.div`
    padding: 5rem 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;