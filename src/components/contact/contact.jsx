import React, { useRef } from 'react';
import './contact.css';
import InstagramIcon from '../../assets/instagram.png';
import GithubIcon from '../../assets/github-logo.png';
import TwitterIcon from '../../assets/twitter.png';
import LinkedinIcon from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ln9h7fr', 'template_92ygyge', form.current, {
                publicKey: '_D94gZJ_wWSs3boW8',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Email Sent');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to get in touch regarding any job opportunities or collaboration inquiries. <br /> I look forward to hearing from you and discussing how we can work together to achieve our goals.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" name='from_name' placeholder='YourName' />
                    <input type="email" className="email" name='your_email' placeholder='Your Email' />
                    <textarea className='msg' name="message" rows="5" placeholder='Your message'></textarea>
                    <button className="submitBtn" type='submit' value='Send'>Submit</button>
                    <div className="links">
                        <img src={GithubIcon} alt="" className="link" />
                        <img src={TwitterIcon} alt="" className="link" />
                        <img src={LinkedinIcon} alt="" className="link" />
                        <img src={InstagramIcon} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
