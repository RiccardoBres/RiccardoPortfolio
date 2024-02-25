import React from 'react';
import './AboutMe.css';
import CustomTitle from '../../Atoms/CustomTitle';
import AboutMeInfo from '../../Molecules/AboutMeMolecules/AboutMeInfo';
import { Container, Col, Row } from 'react-bootstrap';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    const variants = {
        visible: { 
            opacity: 1,
            y: 0,
            transition: { 
                duration: 1, 
                ease: "easeOut" 
            } 
        },
        hidden: { 
            opacity: 0,
            y: 150 
        }
    };

    return (
        <div ref={ref} id="aboutme-section">
            <motion.div 
                className='container-contact-about'
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
            >
                <Container fluid >
                    <Row className='row-contact-about'>
                        <CustomTitle text='About' className='mb-4' />
                        <CustomTitle className='small-title w-50' text="I'm a Junior Web Developer who's passionate about creating impactful digital experiences" />
                        <div className="d-flex justify-content-center align-items-center">
                            <hr className='w-50' />
                        </div>
                        <Col lg={12} md={12} sm={12} xs={12} className='mt-3'>
                            <AboutMeInfo />
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </div>
    );
}

export default AboutMe;
