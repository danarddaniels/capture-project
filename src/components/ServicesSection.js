import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

//Styles
import {StyledLayout, StyledDescription, StyledImage, StyledHide} from '../styles';
import style from 'styled-components';


const ServicesSection = () => {
    return(
        <StyledServices>
            <StyledDescription>
                <h2>High <span>quality</span> services</h2>
                <StyledCards>
                    <StyledCard >
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard >
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>    
                            <p>Lorem ipsum dolor sit amet.</p>
                        
                    </StyledCard>
                    <StyledCard >
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Pro Grade Gear</h3>
                        </div>    
                            <p>Lorem ipsum dolor sit amet.</p>
                        
                    </StyledCard>
                    <StyledCard >
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                         </div>    
                            <p>Lorem ipsum dolor sit amet.</p>
                       
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt=""/>
            </StyledImage>              
        </StyledServices>
    )
}

const StyledServices = style(StyledLayout)`

    h2{
        padding-bottom: 3.5rem;
    }
        
    p{
        width: 70%;
        padding: 2.5rem 0rem 4rem 0rem;
    }
`;

const StyledCards = style.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;

const StyledCard = style.div`
    flex-basis: 15rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }

`;


export default ServicesSection;