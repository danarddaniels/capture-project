import React from 'react';
//styles
import {StyledLayout, StyledDescription, StyledImage, StyledHide} from '../styles';


const FaqSection = () => {
    return(
        <StyledLayout>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates.</p>
                </div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates.</p>
                </div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates.</p>
                </div>
            </div>
            <div className="question">
                <h4>What Products do you offer.</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates.</p>
                </div>
            </div>
        </StyledLayout>
    )
}

export default FaqSection;