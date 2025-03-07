import React from 'react';
import  home1  from '../img/home1.png';
//Styled
import style from 'styled-components';



const AboutSection = () => {
    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide className="hide">
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide className="hide">
                        <h2>true.</h2>
                    </StyledHide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage className="image">
                <img src={home1} alt="camera"/>
            </StyledImage>
        </StyledAbout>
    )
};

//Styled Components
const StyledAbout = style.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const StyledDescription = style.div`
    flex: 1;

    padding-right: 5rem;

    h2{
        font-weight: lighter;
    }
`;

const StyledImage = style.div`
    flex: 1;

    overflow: hidden;

    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const StyledHide = style.div`
    overflow: hidden;
`;

export default AboutSection;