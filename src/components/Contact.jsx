import React, { useState } from 'react';

import '../styles/Contact.css';
import '../styles/main.css';
import '../styles/ContactModal.css';

import emailIcon from '../assets/email.png';
import phoneIcon from '../assets/phone.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

// import closeIcon from '../assets/close.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSending, setIsSending] = useState(false);
    const [sentSuccess, setSentSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsSending(true);
            const res = await fetch('https://formspree.io/f/xwpbnqnd', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSentSuccess(true);
                setIsSending(false);
                setFormData({ name: '', email: '', message: '' });
                // onClose();
            } else {
                alert('Failed to send message.');
            }
        } catch (err) {
            alert('Error sending message. Please try again.');
        } finally {
            setIsSending(false);
        }
    };


    return (
        <section id="contact" className="contact-section container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <p className="contact-description">If you have any questions or just want to say hi, feel free to reach out!</p>
                    <div className="contact-address">
                        <p><img src={emailIcon} width={24} /> Email: <a href="mailto:haileamlakbeat@gmail.com">haileamlakbeat@gmail.com</a></p>
                        <p><img src={phoneIcon} width={24} /> Phone: <a href="tel:+251906397248">+251 906 397 248</a></p>
                        <p><img src={linkedinIcon} width={24} /> LinkedIn: <a href="https://www.linkedin.com/in/haileamlak/" target="_blank" rel="noopener noreferrer">Haileamlak Belachew</a></p>
                        <p><img src={githubIcon} width={24} /> GitHub: <a href="https://www.github.com/haileamlak" target="_blank" rel="noopener noreferrer">Haileamlak</a></p>
                    </div>
                </div>
                <div className="contact-form-container">

                    <div className="modal">
                        {!sentSuccess ? (
                            <>
                                <h2>Send a message</h2>
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                                    <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                                    <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
                                    <button type="submit" disabled={isSending} style={{ backgroundColor: isSending ? 'gray' : '#5C9B80' }} className="submit-btn">
                                        {isSending ? 'Sending...' : 'Send'}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="success-message">
                                <h2>Thank you!</h2>
                                <p>Your message has been sent successfully.</p>
                                <button onClick={() => (
                                    setSentSuccess(false),
                                    setFormData({ name: '', email: '', message: '' }),
                                    onClose()
                                )}>Close</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
