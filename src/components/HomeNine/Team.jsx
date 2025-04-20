import React from 'react';
import { Link } from 'react-router-dom';
import TeamMember1 from '../../assets/images/team/team-four-image1.jpg';
import TeamMember2 from '../../assets/images/team/team-four-image2.jpg';
import TeamMember3 from '../../assets/images/team/team-four-image3.jpg';
import TeamMember4 from '../../assets/images/team/team-four-image4.jpg';
import TeamMember5 from '../../assets/images/team/team-four-image5.jpg';
import TeamMember6 from '../../assets/images/team/team-four-image6.jpg';


function TeamSection({ className }) {
    return (
        <section className="team-two-area pt-130 pb-130">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-4">
                        <div className="team__left">
                            <div className="section-header">
                                <h2 className="wow splt-txt" data-splitting>Bring your team together
                                    & foster a sense of unity collaboration</h2>
                                <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Partnering with
                                    Stratify-Tax/VAT ensures your books are accurate and updated in
                                    real-time, giving you peace of mind.</p>
                            </div>
                            <Link to="/page-team" className="btn-one wow fadeInUp mt-50" data-wow-delay="200ms"
                                data-wow-duration="1500ms" data-splitting data-text="View More">View More</Link>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="row g-4 g-lg-5">
                            <div className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
                                <div className="team-two__item">
                                    <div className="socials">
                                        <i className="fa-regular fa-plus"></i>
                                        <ul>
                                            <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="image">
                                        <img src={TeamMember1} alt="image"/>
                                    </div>
                                    <div className="content">
                                        <span className="sub-title">Marketing Leader</span>
                                        <h4 className="title"><Link className="hover-link-light"
                                                to="/page-team-details">Brooklyn Simmons</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <div className="team-two__item">
                                    <div className="socials">
                                        <i className="fa-regular fa-plus"></i>
                                        <ul>
                                            <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="image">
                                        <img src={TeamMember2} alt="image"/>
                                    </div>
                                    <div className="content">
                                        <span className="sub-title">CEO & Founder</span>
                                        <h4 className="title"><Link className="hover-link-light"
                                                to="/page-team-details">Charlotte Martinez</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="400ms"
                                data-wow-duration="1500ms">
                                <div className="team-two__item">
                                    <div className="socials">
                                        <i className="fa-regular fa-plus"></i>
                                        <ul>
                                            <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="image">
                                        <img src={TeamMember3} alt="image"/>
                                    </div>
                                    <div className="content">
                                        <span className="sub-title">Web Designer</span>
                                        <h4 className="title"><Link className="hover-link-light"
                                                to="/page-team-details">Leslie Alexander</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
                                <div className="team-two__item">
                                    <div className="socials">
                                        <i className="fa-regular fa-plus"></i>
                                        <ul>
                                            <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="image">
                                        <img src={TeamMember4} alt="image"/>
                                    </div>
                                    <div className="content">
                                        <span className="sub-title">Marketing Leader</span>
                                        <h4 className="title"><Link className="hover-link-light"
                                                to="/page-team-details">Marvin McKinney</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <div className="team-two__item">
                                    <div className="socials">
                                        <i className="fa-regular fa-plus"></i>
                                        <ul>
                                            <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="image">
                                        <img src={TeamMember5} alt="image"/>
                                    </div>
                                    <div className="content">
                                        <span className="sub-title">Co-Ordinator</span>
                                        <h4 className="title"><Link className="hover-link-light"
                                                to="/page-team-details">Arlene McCoy</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="400ms"
                                data-wow-duration="1500ms">
                                <div className="team-two__item">
                                    <div className="socials">
                                        <i className="fa-regular fa-plus"></i>
                                        <ul>
                                            <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="image">
                                        <img src={TeamMember6} alt="image"/>
                                    </div>
                                    <div className="content">
                                        <span className="sub-title">Merchandiser</span>
                                        <h4 className="title"><Link className="hover-link-light"
                                                to="/page-team-details">Darlene Robertson</Link>
                                        </h4>
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
