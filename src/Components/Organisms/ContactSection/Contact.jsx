import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../../Molecules/ContactMolecules/ContactForm'
import ContactIntro from '../../Molecules/ContactMolecules/ContactIntro';
import './ContactSection.css';
import CustomTitle from '../../Atoms/CustomTitle';

const Contact= () => {

    return (
        <>
            <Container className='container-contact-section' id='contact-section'>
                <Row className='row-contact-section'>
                    <CustomTitle text='Contact' className='mb-5' />
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <ContactIntro />
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} className='d-flex align-items-center justify-content-center'>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;
