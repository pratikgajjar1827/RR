import React from "react";
import { Link } from 'react-router-dom';
import TeamImage1 from '../../assets/images/team/team-five-image1.jpg'; 
import TeamImage2 from '../../assets/images/team/team-five-image2.jpg'; 
import TeamImage3 from '../../assets/images/team/team-five-image3.jpg'; 

function Team() {

    return (
        <>
            
        <section className="team-five-area pt-130 pb-130">
            <div className="container">
                <div className="team-five__wrp">
                    <div className="section-header__flex mb-50">
                        <div>
                            <h6>ABOUT COMPANY</h6>
                            <h2 className="wow splt-txt" data-splitting>We are building great future <br /> Together, Be with us </h2>
                        </div>
                        <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Stratify provides a comprehensive range of consultancy and training services for data consultation, focusing on strategic business solutions and effective training methods.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="team-five__item">
                                <div className="image">
                                    <img src={TeamImage1} alt="image" />
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link to="/page-team-details" className="hover-link-light">Madison Loren</Link></h4>
                                    <span className="sub-title">Chief Executive</span>
                                    <div className="socials">
                                        <Link to="/"><i className="fa-brands fa-facebook-f" /></Link>
                                        <Link to="/"><i className="fa-brands fa-instagram" /></Link>
                                        <Link to="/"><i className="fa-brands fa-linkedin-in" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="team-five__item">
                                <div className="image">
                                    <img src={TeamImage2} alt="image" />
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link to="/page-team-details" className="hover-link-light">Esther Howard</Link></h4>
                                    <span className="sub-title">Medical Assistant</span>
                                    <div className="socials">
                                        <Link to="/"><i className="fa-brands fa-facebook-f" /></Link>
                                        <Link to="/"><i className="fa-brands fa-instagram" /></Link>
                                        <Link to="/"><i className="fa-brands fa-linkedin-in" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="team-five__item">
                                <div className="image">
                                    <img src={TeamImage3} alt="image" />
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link to="/page-team-details" className="hover-link-light">Jenny Wilson</Link></h4>
                                    <span className="sub-title">Web Designer</span>
                                    <div className="socials">
                                        <Link to="/"><i className="fa-brands fa-facebook-f" /></Link>
                                        <Link to="/"><i className="fa-brands fa-instagram" /></Link>
                                        <Link to="/"><i className="fa-brands fa-linkedin-in" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Team