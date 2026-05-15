import { Link } from 'react-router-dom'
import profilePhoto from '../assets/profile.jpeg'
import aboutPhoto1 from '../assets/about1.jpg'
import aboutPhoto2 from '../assets/about2.webp'
import aboutPhoto3 from '../assets/about3.jpg'
import emailjs from '@emailjs/browser'
import { useRef, useState, useEffect } from 'react'

export default function Home() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    // Refs for about sections
    const aboutSection1 = useRef(null);
    const aboutSection2 = useRef(null);
    const aboutSection3 = useRef(null);

    useEffect(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.2, // Trigger when 20% of the element is visible
            rootMargin: '0px'
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add visible class when scrolling into view
                    entry.target.classList.add('visible');
                } else {
                    // Remove visible class when scrolling out of view
                    entry.target.classList.remove('visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all about sections
        if (aboutSection1.current) observer.observe(aboutSection1.current);
        if (aboutSection2.current) observer.observe(aboutSection2.current);
        if (aboutSection3.current) observer.observe(aboutSection3.current);

        // Cleanup
        return () => {
            if (aboutSection1.current) observer.unobserve(aboutSection1.current);
            if (aboutSection2.current) observer.unobserve(aboutSection2.current);
            if (aboutSection3.current) observer.unobserve(aboutSection3.current);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        emailjs.sendForm(
            'service_jr8ahks',
            'template_vdysja9',
            form.current,
            'YegvGYsoIIooUu7fc'
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
            <section id="home" className="hero-section">
                <div className='hero-box'>
                    {/* Left - Profile Photo */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className='hero-left'>
                            <img
                                src={profilePhoto}
                                alt="Your Name"
                                className='hero-img'
                            />
                        </div>
                    </div>

                    {/* Right - Text Content */}
                    <div className='hero-right'>
                        <h1 className='hero-header'>
                            Caleb Studdie
                        </h1>
                        <p className='hero-sub'>
                            Full-Stack Developer & Cybersecurity Enthusiast
                        </p>
                        <p className='hero-description'>
                            Brief introduction about yourself goes here. One or two sentences describing
                            your passion, your skills, and what makes you unique.
                        </p>

                        {/* Social Links */}
                        <div className='hero-social-container'>
                            <a href="https://github.com/cstuddie"
                                className='social-link'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/caleb-studdie/"
                                className='social-link'
                                target="_blank"
                                rel="noopener noreferrer">
                                LinkedIn
                            </a>
                            <a href="mailto:calebstuddie@gmail.com"
                                className='social-link'
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </div>
                {/* Scroll Indicator */}
                <div className="scroll-indicator"></div>
            </section >

            <section id="about" className="preview-section" style={{ padding: 0 }}>
                {/* Header section with normal padding */}
                <div className="preview-box" style={{ padding: '100px 24px 60px' }}>
                    <h2 className="preview-header">About Me</h2>
                    <p className="preview-text">Get to know me beyond the code</p>
                </div>

                {/* Full-width content */}
                <div className="about-content">

                    {/* My Journey */}
                    <div className='about-box-split' ref={aboutSection1}>
                        <img src={aboutPhoto1} alt="coding" className='about-img'/>
                        <div className='about-text'>
                            <h3 className="about-header">My Journey</h3>
                            <p className="about-description">
                                I discovered my love for coding when I got to college. I chose Software
                                Engineering because I wanted a challenge, but I soon fell in love with it
                                after building my first application — an E-Commerce Platform. Since then,
                                I've been dedicated to learning and growing as a developer, focusing on
                                creating clean, efficient code, and staying up-to-date with the latest
                                technologies.
                            </p>
                        </div>
                    </div>

                    {/* What I Do */}
                    <div className='about-box-split' ref={aboutSection2}>
                        <div className='about-text'>
                            <h3 className="about-header">What I Do</h3>
                            <p className="about-description">
                                I specialize in building modern web applications using React, Node.js, and
                                other cutting-edge technologies. I'm particularly interested in cybersecurity
                                and ensuring that the applications I build are not just functional, but also
                                secure.
                            </p>
                        </div>
                        <img src={aboutPhoto2} alt="coder" className='about-img'/>
                    </div>

                    {/* Beyond Code */}
                    <div className='about-box-split' ref={aboutSection3}>
                        <img src={aboutPhoto3} alt="pianoman" className='about-img'/>
                        <div className='about-text'>
                            <h3 className="about-header">Beyond Code</h3>
                            <p className="about-description">
                                When I'm not coding, you can find me singing, leading a music rehearsal, or
                                playing piano. I've been part of a student-led a cappella group at MSU called
                                TrebullDawgs for two years, and I had the honor of serving as Music Director
                                this past year. In addition, I serve as the Music Director and Lead Pianist
                                at Starkville Church of God, where I ensure smooth collaboration and execution
                                with our musicians. I believe that these experiences outside of tech help me
                                bring fresh perspectives to problem-solving and collaboration.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <p className="about-cta">
                        I'm always excited to connect with other developers and explore new
                        opportunities. Feel free to reach out if you would like to collaborate
                        or just chat about tech!
                    </p>
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