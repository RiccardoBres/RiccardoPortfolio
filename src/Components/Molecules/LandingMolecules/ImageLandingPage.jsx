import React from 'react'
import CustomImage from '../../Atoms/CustomImage';
import ProfileImage from '../../../Layout/ASSETS/ProfileImage.png';
import './LandingMolecules.css'

const ImageLandingPage = () => {
    return (
        <div className="container-image-landing">
            <CustomImage src={ProfileImage} className="profile-image-landing" />
        </div>
    )
}

export default ImageLandingPage
