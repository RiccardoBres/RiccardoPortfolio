import React from 'react';
import './ContactMolecules.css';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomButton from '../../Atoms/CustomButton';
import Animation from '../../../Layout/ASSETS/Animation - 1708797436089.gif';
import CustomImage from '../../Atoms/CustomImage';
import ResumePDF from './CV.pdf';

const ContactIntro = () => {
    

    return (
        <div className='container-intro-contact'>
            <CustomImage src={Animation} className='animation-contact' />
            <CustomTitle text='Interested in discussing potential career opportunities or collaboration possibilities? Feel free to leave a message or connect with me through the contact options provided in my portfolio.' />
            <a href={ResumePDF} download="Riccardo-Bresolin-CV2024.pdf">
                <CustomButton text='Download Resume' className='button mt-4' />
            </a>
        </div>
    );
};

export default ContactIntro;
