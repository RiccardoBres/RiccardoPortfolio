import React, { useState } from 'react';
import ProjectDescription from './ProjectDescription';
import CustomTitle from '../../Atoms/CustomTitle';
import { IoInformation } from "react-icons/io5";
import ModalInfoProject from './ModalInfoProject';
import { HiOutlineLockOpen } from "react-icons/hi2";
import { IoInformationCircleOutline } from "react-icons/io5";
import { RxEyeOpen } from "react-icons/rx";
import './CarouselProject.css';

const CarouselProject = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleIconClick = (index) => {
    setActiveIndex(index);
  };

  const handleInfoIconClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-carousel">
      {ProjectDescription.map((project, index) => (
        <div className={`card-carousel ${index === activeIndex ? 'active' : ''}`} key={index}>
          <img className="background-img" src={project.src} alt="" />
          <div className="card-content">
            <div className="profile-image" onClick={() => handleIconClick(index)}>
              <RxEyeOpen />
            </div>
            <CustomTitle text={project.title} className="small-title m-0" />
            {index == activeIndex ? <div className="profile-image" onClick={handleInfoIconClick}>
              <IoInformationCircleOutline className='info-icon' />
            </div> : null}
          </div>
          <div className="backdrop"></div>
        </div>
      ))}
      {showModal && (
        <ModalInfoProject
          show={showModal}
          onHide={handleCloseModal}
          title={ProjectDescription[activeIndex].title}
          description={ProjectDescription[activeIndex].description}
          technology={ProjectDescription[activeIndex].technology}
          achieved={ProjectDescription[activeIndex].achieved}
          coffee={ProjectDescription[activeIndex].coffee}
          src={ProjectDescription[activeIndex].src}
          video={ProjectDescription[activeIndex].video}
          href={ProjectDescription[activeIndex].href}
          demoAccount={ProjectDescription[activeIndex].demoAccount}
          status={ProjectDescription[activeIndex].status}
        />
      )}
    </div>
  );
};

export default CarouselProject;
