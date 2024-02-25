import React from 'react';
import IntroLandingPage from '../../Molecules/LandingMolecules/IntroLandingPage';
import { Container, Row, Col } from 'react-bootstrap';
import ImageLandingPage from '../../Molecules/LandingMolecules/ImageLandingPage';
import './LandingSection.css';

const Landing = () => {
    
    return (
        <>
            <Container className='container-home-page'>
                <Row className='d-flex align-items-center justify-content-center w-100'>
                    <Col lg={6} md={6} sm={12}>
                        <IntroLandingPage />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <ImageLandingPage />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Landing;
