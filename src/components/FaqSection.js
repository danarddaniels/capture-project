import React from 'react';
//styles
import {StyledLayout, StyledDescription, StyledImage, StyledHide} from '../styles';
import style from 'styled-components';


const FaqSection = () => {
    return(
        <FAQLayout>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates.</p>
                </div>
                <div className="faq-Line"></div>   
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates.</p>
                </div>
                <div className="faq-Line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates.</p>
                </div>
                <div className="faq-Line"></div>
            </div>
            <div className="question">
                <h4>What Products do you offer.</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates.</p>
                </div>
                <div className="faq-Line"></div>
            </div>
        </FAQLayout>
    )
}

const FAQLayout = style(StyledLayout)`
    display: block;

    span{
        display: block;
    }

    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .question{
        padding: 3rem 0;
        cursor: pointer;
    }

    .faq-Line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }

    .answer{
        padding: 2rem 0;
        p{
            padding: 1rem 0;
        }
    }
`;

export default FaqSection;