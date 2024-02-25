import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import './AboutMeMolecules.css';
import CustomParagraph from '../../Atoms/CustomParagraph';
import { FaUserAlt, FaCode, FaGraduationCap, FaEnvelope } from 'react-icons/fa';


const AboutMeInfo = () => {
    const aboutMe = `I fell in love with web development because of its power to transform ideas into reality. Originally from Italy, I started my journey studying hospitality, then spent a couple of years in Spain. Now, I'm settled in Portugal for a little over three years,but I'm always up for new adventures and opportunities. Let's connect and create something awesome together!`;

    return (
        <div className='container-intro-about'>
            <CustomParagraph text={aboutMe} className='medium-p about-me-text' />
            <div className="container-specific-info">
                <div className='text-center'>
                    <FaUserAlt className='icon-specific-info' />
                    <CustomTitle text='Name' className='small-title' />
                    <CustomParagraph text='Riccardo Bresolin' className='medium-p' />
                </div>
                <div className='text-center'>
                    <FaEnvelope className='icon-specific-info' />
                    <CustomTitle text='Email' className='small-title' />
                    <CustomParagraph text='riccardobresolin97@libero.it' className='medium-p' />
                </div>
                <div className='text-center'>
                    <FaGraduationCap className='icon-specific-info' />
                    <CustomTitle text='Education' className='small-title' />
                    <CustomParagraph text='Istituto Elena Cornaro / Epicode' className='medium-p' />
                </div>
                <div className='text-center'>
                    <FaCode className='icon-specific-info' />
                    <CustomTitle text='Employment' className='small-title' />
                    <CustomParagraph text='Open' className='medium-p' />
                </div>
            </div>
        </div>
    )
}

export default AboutMeInfo
