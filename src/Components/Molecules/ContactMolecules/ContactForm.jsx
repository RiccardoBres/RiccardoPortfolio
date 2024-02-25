import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import CustomButton from '../../Atoms/CustomButton';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import './ContactMolecules.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, event.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                setFormData({
                    from_name: '',
                    from_email: '',
                    message: ''
                });
                setShowModal(true);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="mip-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Enter your name" name="from_name" value={formData.from_name} onChange={handleChange} className='color-light' />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="Enter your email" name="from_email" value={formData.from_email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message" value={formData.message} onChange={handleChange} />
                </Form.Group>
                <CustomButton type="submit" text='Submit' className='button' />
            </Form>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <CustomTitle text='Thank you for your message!'/>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CustomParagraph text='I will contact you soon!' />
                </Modal.Body>
                <Modal.Footer>
                   <CustomButton text='Close' className='button' onClick={handleClose} />
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ContactForm;
