import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import CarouselProject from '../../Molecules/ProjectMolecules/CarouselProject';
import './ProjectSection.css'
import { Col, Row, Container } from 'react-bootstrap';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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
        <div ref={ref} id="project-section">
            <motion.div 
                className='container-project-organism'
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
            >
                <Container fluid >
                    <Row className='row-project-section'>
                        <CustomTitle text='Projects' className='medium-title mb-5' />
                        <Col lg={12} md={12} sm={12} className='col-project'>
                            <CarouselProject />
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </div>
    );
}

export default Projects;
