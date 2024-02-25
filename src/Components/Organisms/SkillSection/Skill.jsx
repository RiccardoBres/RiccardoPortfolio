import React from 'react';
import './SkillSection.css'
import { Col, Container, Row } from 'react-bootstrap';
import CustomTitle from '../../Atoms/CustomTitle';
import SkillCard from '../../Molecules/SkillsMolecules/SkillCard';
import CustomParagraph from '../../Atoms/CustomParagraph';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skill = () => {
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
        <div ref={ref} id='skill-section'>
            <motion.div 
                className='container-skill-section'
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
            >
                <Container fluid >
                    <Row className='row-skill-section'>
                        <CustomTitle text='Skills' className='medium-title my-3' />
                        <CustomTitle text='Hover over the skill icons to see a breakdown of my proficiency level.' className='small-title my-3' />
                        <div className="d-flex justify-content-center align-items-center">
                            <hr className='w-50' />
                        </div>
                        <CustomParagraph className='medium-p w-50 mb-5' text="The chart displays my self-assessment of skills I've been exposed to since entering this field. As a junior, I recognize there's a vast array of knowledge to acquire and areas to improve upon. This assessment is a starting point, and I anticipate my understanding and skills will evolve over time." />
                        <Col lg={12} md={12} sm={12}>
                            <SkillCard />
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </div>
    );
}

export default Skill;
