import React from 'react';
import { Col, Row } from "react-bootstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosCall, IoMdMail, IoMdPin } from "react-icons/io";
import "./About.css";

const AboutUs = () => {
    return (
        <div className='about-us my-5'>
            <div className='container'>
                <Row xs={1} md={2} className='g-4 px-4'>
                    <Col>
                        {/* Header for AboutUs page */}
                        <p className='about-title'>
                            We sell <br /> Products <br /> Around the world
                        </p>
                    </Col>
                    <Col style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <img className='img-about' src="https://dyopath.com/wp-content/uploads/2020/06/EDICATION-IMG.png" alt='' />
                    </Col>
                </Row>
                <p className='second-title'>Our origins</p>
                <p className='text'>
                    We are the student of chitkara University
                </p>
                <div className="my-5">
                    <p className='service-title pb-4'>
                        Why Clients Choose Shri Hari for Shopping
                    </p>
                    <Row xs={1} md={2} className='g-4'>
                        <Col>
                            <img
                                className='img-fluid'
                                src='https://dyopath.com/wp-content/uploads/2020/06/Education-2-img.png'
                                alt=''
                            />
                        </Col>
                        <Col>
                            {/* Some boolet points */}
                            <div className='service-info'>
                                <p className='service-sub'>
                                    <span className='icon'>
                                        <BsFillCheckCircleFill />
                                    </span>
                                    Innovative
                                </p>
                                <p className='service-text'>
                                    We stay on the cutting edge of learning frameworks, offering the
                                    latest technology services to better equip K-12 organizations for
                                    achieving greater success.
                                </p>
                            </div>
                            <div className='service-info'>
                                <p className='service-sub'>
                                    <span className='icon'>
                                        <BsFillCheckCircleFill />
                                    </span>
                                    Safe
                                </p>
                                <p className='service-text'>
                                    We protect sensitive data, keeping your K-12 institution’s and
                                    your students’ information safe, with advanced features that
                                    support enhanced security.
                                </p>
                            </div>
                            <div className='service-info'>
                                <p className='service-sub'>
                                    <span className='icon'>
                                        <BsFillCheckCircleFill />
                                    </span>
                                    Collaborative
                                </p>
                                <p className='service-text'>
                                    DYOPATH supports your prioritization of technology solutions that
                                    will streamline the delivery of education and improved
                                    collaboration efficiencies between students, teachers and parents.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='about-info-box'>
                    <div className='info-box'>
                        <IoMdPin className='fas' />
                        <h3 className='info-box-title'>Our Address</h3>
                        <p>Chitkara University</p>
                    </div>
                    <div className='info-box mt-4'>
                        <IoMdMail />
                        <h3>Email Us</h3>
                        <p>
                            tanmay3849.be22@chitkara.edu.in
                            <br />
                            vishnu3862.be22@chitkara.edu.in
                        </p>
                    </div>
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
    );
};

export default AboutUs;