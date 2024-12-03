import React from "react";
import { IoIosCall, IoMdMail, IoMdPin } from "react-icons/io";
import "./Contact.css";


function Contact() {

    return (
        <div className='mt-md-5 my-3'>
            <p className='contact-sub mt-3 text-center'>Get in touch</p>
            <p className='regular-title text-center'>Contact</p>
            <section id='contact' className='contact'>
                <div className='container'>
                    <div className=''>
                        
                    </div>
                </div>

                <div>

                    <iframe
                        title='Meddical'
                        className='medi-map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.17513520983!2d76.65720287536412!3d30.516086474689473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1726805863440!5m2!1sen!2sin"
                        allowfullscreen=''
                        loading='lazy'></iframe>
                </div>

                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='info-box'>
                                        <IoMdPin className='fas' />
                                        <h3 className='info-box-title'>Our Address</h3>
                                        <p>Chitkara University</p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='info-box mt-4'>
                                        <IoMdMail />
                                        <h3>Email Us</h3>
                                        <p>
                                            tanmay3849.be22@chitkara.edu.in
                                            <br />
                                            vishnu3862.be22@chitkara.edu.in
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='info-box mt-4'>
                                        <IoIosCall />
                                        <h3>Call Us</h3>
                                        <p>
                                           +91 75083**734
                                           
                                            <br />
                                            +91 6284****14
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 contact-form-container'>
                            <form className='email-form'>
                                <div className='row'>
                                    <div className='col form-group'>
                                        <input
                                            type='text'
                                            name='name'
                                            className='form-control'
                                            id='name'
                                            placeholder='Your Name'
                                            required
                                        />
                                    </div>
                                    <div className='col form-group'>
                                        <input
                                            type='email'
                                            className='form-control'
                                            name='email'
                                            id='email'
                                            placeholder='Your Email'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='form-group mt-3'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='subject'
                                        id='subject'
                                        placeholder='Subject'
                                        required
                                    />
                                </div>
                                <div className='form-group mt-3'>
                                    <textarea
                                        className='form-control'
                                        name='message'
                                        rows='5'
                                        placeholder='Message'
                                        required></textarea>
                                </div>
                                <div className='text-center pt-4'>
                                    <button className='btn btn-regular' type='submit'>
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;