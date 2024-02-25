import React from 'react';
import CustomSidebar from '../Components/Organisms/Sidebar/CustomSidebar';
import Landing from '../Components/Organisms/LandingSection/Landing';
import Projects from '../Components/Organisms/ProjectSection/Projects';
import Skill from '../Components/Organisms/SkillSection/Skill';
import Contact from '../Components/Organisms/ContactSection/Contact';
import AboutMe from '../Components/Organisms/AboutMeSection/AboutMe';
import CustomFooter from '../Components/Organisms/FooterSection/CustomFooter';


const Home = () => {
  return (
    <>
      <CustomSidebar />
      <Landing id="home-section"/>
      <AboutMe id="aboutme-section" />
      <Projects id="project-section" />
      <Skill id="skill-section" />
      <Contact id="contact-section" /> 
      <CustomFooter /> 
    </>
  )
}

export default Home;

