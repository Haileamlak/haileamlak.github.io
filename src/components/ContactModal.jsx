import React, { useState } from 'react';
import '../styles/ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
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
            const res = await fetch('https://formspree.io/f/xgvyklob', {
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

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={() => (
                    setSentSuccess(false),
                    setFormData({ name: '', email: '', message: '' }),
                    onClose()
                )}>×</button>

                {!sentSuccess ? (
                    <>
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                            <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
                            <button type="submit" disabled={isSending} style={{ backgroundColor: isSending ? 'gray' : '#ff5500' }} className="submit-btn">
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
    );
};

export default ContactModal;