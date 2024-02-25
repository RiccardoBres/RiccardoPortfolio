import React from 'react';
import './LandingMolecules.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';


const IntroLandingPage = () => {
    return (
        <div className='container-intro-home'>
            <div className="container-text-home">
                <CustomTitle text='Hello! My name is Riccardo!' className='big-title custom-title' />
                <div className="quote-container">
                    <CustomParagraph text="<>" className='medium-p m-0' />
                    <CustomParagraph text="Passionate about creating innovative and efficient web solutions" className='big-p cursive m-0' />
                    <CustomParagraph text="</>" className='medium-p m-0 p-0' />
                </div>
            </div>
            
            
        </div>
    )
}

export default IntroLandingPage;
