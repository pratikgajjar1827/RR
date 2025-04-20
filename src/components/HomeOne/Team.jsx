import React from 'react';
import { Link } from 'react-router-dom';
import TeamImage1 from '../../assets/images/team/team-image1.jpg';
import TeamImage2 from '../../assets/images/team/team-image2.jpg';
import TeamImage3 from '../../assets/images/team/team-image3.jpg';
import TeamImage4 from '../../assets/images/team/team-image4.jpg';


function TeamSection() {
    return (
        <section className="team-area pt-130">
            <div className="container">
                <div className="team__wrp">
                    <div className="row g-5">
                        <div className="col-xl-5">
                            <div className="team__left">
                                <div className="section-header">
                                    <h2 className="wow splt-txt" data-splitting>Bring your team together
                                        & foster a sense of unity collaboration</h2>
                                    <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Partnering
                                        with Stratify-Tax/VAT ensures your books are accurate and updated in
                                        real-time, giving you peace of mind.</p>
                                </div>
                                <Link to="/page-team" className="btn-one wow fadeInUp mt-50" data-wow-delay="200ms"
                                    data-wow-duration="1500ms" data-splitting data-text="View More">View More</Link>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="team__right">
                                <div className="row g-4 g-lg-5">
                                    <div className="col-sm-6 wow fadeInLeft" data-wow-delay="00ms"
                                        data-wow-duration="1500ms">
                                        <div className="team__item have-margin">
                                            <div className="socials">
                                                <i className="fa-regular fa-plus"></i>
                                                <ul>
                                                    <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                                    <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="team__image">
                                                <img src={TeamImage1} alt="image"/>
                                            </div>
                                            <h4><Link className="hover-link" to="/page-team-details">Brooklyn Simmons</Link>
                                            </h4>
                                            <span>Marketing Leader</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeInLeft" data-wow-delay="200ms"
                                        data-wow-duration="1500ms">
                                        <div className="team__item">
                                            <div className="socials">
                                                <i className="fa-regular fa-plus"></i>
                                                <ul>
                                                    <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                                    <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="team__image">
                                                <img src={TeamImage2} alt="image"/>
                                            </div>
                                            <h4><Link className="hover-link" to="page-team-details.html">Leslie Alexander</Link>
                                            </h4>
                                            <span>CEO & Founder</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeInLeft" data-wow-delay="00ms"
                                        data-wow-duration="1500ms">
                                        <div className="team__item have-margin">
                                            <div className="socials">
                                                <i className="fa-regular fa-plus"></i>
                                                <ul>
                                                    <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                                    <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="team__image">
                                                <img src={TeamImage3} alt="image"/>
                                            </div>
                                            <h4><Link className="hover-link" to="/page-team-details">Savannah Nguyen</Link>
                                            </h4>
                                            <span>Medical Assistant</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeInLeft" data-wow-delay="200ms"
                                        data-wow-duration="1500ms">
                                        <div className="team__item">
                                            <div className="socials">
                                                <i className="fa-regular fa-plus"></i>
                                                <ul>
                                                    <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                                    <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="team__image">
                                                <img src={TeamImage4} alt="image"/>
                                            </div>
                                            <h4><Link className="hover-link" to="/page-team-details">Ronald Richards</Link>
                                            </h4>
                                            <span>Web Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
