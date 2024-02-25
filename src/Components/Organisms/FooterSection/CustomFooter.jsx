import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import {Container, Row, Col} from'react-bootstrap';
import './FooterSection.css'

const CustomFooter = () => {
  return (
    <Container fluid className='container-footer-section'>
        <Row>
            <Col lg={12} md={12} sm={12} className='col-footer-section'>
                <div className="d-flex align-items-center justify-content-center">
                    <CustomTitle text='© 2024 Riccardo Bresolin | All rights reserved' />
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default CustomFooter
