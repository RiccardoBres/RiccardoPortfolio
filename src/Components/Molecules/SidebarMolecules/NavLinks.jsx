import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './NavMolecules.css';
import CustomTitle from '../../Atoms/CustomTitle';
import { Link } from 'react-scroll';

const NavLinks = () => {
    return (
        <div className="nav-body">
            <div className="container-icon-nav">
                <a href="https://www.linkedin.com/in/riccardo-bresolin">
                    <FaLinkedinIn className='icon-nav' />
                </a>
                <a href="https://github.com/RiccardoBres">
                    <FaGithub className='icon-nav' />
                </a>
            </div>
            <div className='links'>
                <Link
                    to="aboutme-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                >
                    <CustomTitle text='About' className='small-title' />
                </Link>
                <Link
                    to="project-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                >
                    <CustomTitle text='Projects' className='small-title' />
                </Link>
                <Link
                    to="skill-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                >
                    <CustomTitle text='Skills' className='small-title' />
                </Link>
                <Link
                    to="contact-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                >
                    <CustomTitle text='Contact' className='small-title' />
                </Link>
            </div>
        </div>
    );
}

export default NavLinks;
