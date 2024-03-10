import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CustomButton from '../../Atoms/CustomButton';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CustomParagraph from '../../Atoms/CustomParagraph';
import { GiCoffeeCup } from "react-icons/gi";
import CustomTitle from '../../Atoms/CustomTitle';

const ModalInfoProject = (props) => {
    const [showVideo, setShowVideo] = useState(false);

    const renderCoffeeCups = (numCups) => {
        const coffeeCups = [];
        for (let i = 0; i < numCups; i++) {
            coffeeCups.push(<GiCoffeeCup key={i} />);
        }
        return <div className="d-flex">{coffeeCups}</div>;
    };

    const handleVideo = () => {
        setShowVideo(true);
    };
    const handleDescription = () => {
        setShowVideo(false);
    };

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className='p-0'>
            <Modal.Header closeButton className='flex-column align-items-center justify-content-center'>
                <Modal.Title id="contained-modal-title-vcenter">
                    <CustomTitle text={props.title} className='medium-title' />
                </Modal.Title>
                <CustomParagraph text={props.demoAccount} className='small-p' />
            </Modal.Header>
            <Modal.Body>
                <Container>
                    {showVideo ? (
                        <Row>
                            <Col xs={12} md={12}>
                                <div className='container-video'>
                                    <video autoPlay={true} src={props.video} muted={true} loop={true}></video>
                                </div>
                            </Col>
                        </Row>
                    ) : (
                        <>
                            <Row>
                                <Col xs={12} md={12}>
                                    <CustomTitle text='Description' className='small-title' />
                                    <CustomParagraph text={props.description} className='medium-p description-modal' />
                                </Col>
                                <Col xs={12} md={6}>
                                    <CustomTitle text='Technology' className='small-title' />
                                    <CustomParagraph text={props.technology} className='medium-p' />
                                </Col>
                                <Col xs={12} md={6}>
                                    <CustomTitle text='Achieved' className='small-title' />
                                    <CustomParagraph text={props.achieved} className='medium-p' />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12}>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <CustomTitle text='Coffee Needed' className='small-title' />
                                        {renderCoffeeCups(props.coffee)}
                                    </div>
                                </Col>
                            </Row>
                        </>
                    )}
                </Container>
            </Modal.Body>
            <Modal.Footer className='justify-content-start'>
                {props.status === 'Deployed' ? (
                    <CustomButton className='button' text={<a href={props.href} target='_blank' rel='noreferrer'>Launch</a>} />
                ) : props.status === 'Coming Soon' && props.video !== '' ? (
                    <>
                        <CustomButton text='Video' className='button' onClick={handleVideo} />
                        <CustomButton text='Description' className='button' onClick={handleDescription} />
                    </>
                ) : (
                    <>
                        <CustomTitle text={props.status } className='small-title' />
                    </>
                )}
            </Modal.Footer>

        </Modal>
    );
};

export default ModalInfoProject;
