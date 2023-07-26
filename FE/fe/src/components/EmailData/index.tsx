import React, { useState } from 'react';
import axios from 'axios';
import { EmailData } from './types';
import { Row, Col } from "antd";
import { useNavigate } from 'react-router-dom';
const EmailForm: React.FC = () => {
    const navigate = useNavigate();
    const [emailData, setEmailData] = useState<EmailData>({
        email: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEmailData({ ...emailData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/send', emailData);
            alert('Email sent successfully!');
            setTimeout(() => {
                navigate('/home');
            }, 1000)
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Row gutter={[20, 20]} style={{ margin: '200px 700px' }}>
                <Col>
                    <h2>Send Email</h2>
                </Col>
                <Col span={24}>
                    <input type="email" name="email" placeholder="Recipient Email" value={emailData.email} onChange={handleInputChange} required />
                </Col>
                <Col span={24}>
                    <input type="text" name="subject" placeholder="Subject" value={emailData.subject} onChange={handleInputChange} required />
                </Col>
                <Col span={24}>
                    <textarea name="message" placeholder="Message" value={emailData.message} onChange={handleInputChange} required />
                </Col>
                <Col span={24}>
                    <button type="submit">Send Email</button>
                </Col>
            </Row>
        </form>
    );
};

export default EmailForm;
