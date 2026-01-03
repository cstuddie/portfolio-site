import { Link } from 'react-router-dom'
import profilePhoto from '../assets/profile.jpeg'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

export default function Home() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        emailjs.sendForm(
            'service_jr8ahks',      // Replace with your Service ID
            'template_vdysja9',     // Replace with your Template ID
            form.current,
            'YegvGYsoIIooUu7fc'       // Replace with your Public Key
        )
            .then((result) => {
                console.log(result.text);
                setSubmitMessage('Message sent successfully!');
                setIsSubmitting(false);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setSubmitMessage('Failed to send message. Please try again.');
                setIsSubmitting(false);
            });
    };
    return (
        <div>

            {/* Hero Section */}
            <section id="home" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 24px',
                backgroundColor: '#F9FAF8'
            }}>
                <div style={{
                    maxWidth: '1152px',
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '48px',
                    alignItems: 'center'
                }}>

                    {/* Left - Profile Photo */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            width: '380px',
                            height: '380px',
                            borderRadius: '50%',
                            overflow: 'hidden'
                        }}
                        >
                            <img
                                src={profilePhoto}
                                alt="Your Name"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>

                    {/* Right - Text Content */}
                    <div style={{ textAlign: 'left' }}>
                        <h1 style={{
                            fontSize: '48px',
                            fontWeight: 'bold',
                            color: '#2C2C2C',
                            marginBottom: '16px'
                        }}>
                            Caleb Studdie
                        </h1>
                        <p style={{
                            fontSize: '24px',
                            color: '#7A9B76',
                            fontWeight: '500',
                            marginBottom: '24px'
                        }}>
                            Full-Stack Developer & Cybersecurity Enthusiast
                        </p>
                        <p style={{
                            fontSize: '18px',
                            color: '#2C2C2C',
                            opacity: '0.8',
                            marginBottom: '32px',
                            maxWidth: '600px'
                        }}>
                            Brief introduction about yourself goes here.One or two sentences describing
                            your passion, your skills, and what makes you unique.
                        </p>

                        {/* Social Links */}
                        <div style={{
                            display: 'flex',
                            gap: '24px',
                            fontSize: '18px'
                        }}>
                            <a href="#" className='social-link'>
                                GitHub
                            </a>
                            <a href="#" className='social-link'>
                                LinkedIn
                            </a>
                            <a href="#" className='social-link'>
                                Email
                            </a>
                        </div>
                    </div>
                </div>
                {/* Scroll Indicator */}
                <div className="scroll-indicator"></div>
            </section >

            <section id="about" className="preview-section">
                <div className="preview-box">
                    <h2 className="preview-header">About</h2>
                    <p className="preview-text">Learn more about me</p>
                </div>
            </section>
            <section id="projects" className="preview-section">
                <div className="preview-box">
                    <h2 className="preview-header">Projects</h2>
                    <p className="preview-text">
                        Here are some of my recent projects and work
                    </p>
                    <div style={{ textAlign: 'center', padding: '60px', color: '#7A9B76' }}>
                        Project content coming soon...
                    </div>
                </div>
            </section>
            <section id="skills" className="preview-section">
                <div className="preview-box">
                    <h2 className="preview-header">Skills</h2>
                    <p className='preview-text'>Technologies and tools I work with</p>
                    <div style={{ textAlign: 'center', padding: '60px', color: '#7A9B76' }}>
                        Skills content coming soon...
                    </div>
                </div>
            </section>

            <section id="contact" className="preview-section">
                <div className="preview-box">
                    <h2 className="preview-header">Contact</h2>
                    <p className="preview-text">Let's connect and work together!</p>
                </div>
                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div>
                        <label className="form-label">Name *</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="form-input"
                        />
                        <label className="form-label">Email *</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="form-input"
                        />
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            name="phone-number"
                            className='form-input'
                        />
                        <label className='form-label'>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            className='form-input'
                        />
                        <label className='form-label'>Message *</label>
                        <textarea name="message" required rows="6" className="form-input" style={{ resize: 'vertical' }} />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="contact-submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}

                    </button>
                    {submitMessage && (
                        <p style={{
                            textAlign: 'center',
                            color: submitMessage.includes('success') ? '#7A9B76' : '#C4704F',
                            fontWeight: '500'
                        }}>
                            {submitMessage}
                        </p>
                    )}
                </form>
            </section>


        </div >
    )
}