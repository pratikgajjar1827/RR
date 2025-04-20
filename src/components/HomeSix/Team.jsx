import React from "react";
import { Link } from 'react-router-dom';
import TeamImage1 from '../../assets/images/team/team-six-image1.jpg'; 
import TeamImage2 from '../../assets/images/team/team-six-image2.jpg'; 
import TeamImage3 from '../../assets/images/team/team-six-image3.jpg'; 

function Team() {

    return (
        <>
        <section className="team-six-area pt-130 pb-130">
            <div className="container">
                <div className="team-six__wrp">
                    <div className="section-header text-center mb-50">
                        <h2 className="wow splt-txt" data-splitting>Bring your team together</h2>
                        <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Partnering with
                            Stratify-Tax/VAT ensures your books are accurate and <br /> updated in
                            real-time, giving you peace of mind.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-sm-6 col-lg-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="team-six__item">
                                <div className="image">
                                    <img src={TeamImage1} alt="image"/>
                                    <div className="socials">
                                        <i className="fa-solid fa-share-nodes"></i>
                                        <ul>
                                            <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#0"><i className="fa fa-x"></i></Link></li>

                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title"><Link className="hover-link" to="/page-team-details">Brooklyn
                                        Simmons</Link></h4>
                                <span className="sub-title">Marketing Leader</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="team-six__item">
                                <div className="image">
                                    <img src={TeamImage2} alt="image"/>
                                    <div className="socials">
                                        <i className="fa-solid fa-share-nodes"></i>
                                        <ul>
                                            <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#0"><i className="fa fa-x"></i></Link></li>

                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title"><Link className="hover-link" href="/page-team-details">Leslie
                                        Alexander</Link></h4>
                                <span className="sub-title">CEO & Founder</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="team-six__item">
                                <div className="image">
                                    <img src={TeamImage3} alt="image"/>
                                    <div className="socials">
                                        <i className="fa-solid fa-share-nodes"></i>
                                        <ul>
                                            <li><Link to="#0"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                            <li><Link to="#0"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                            <li><Link to="#0"><i className="fa fa-x"></i></Link></li>

                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title"><Link className="hover-link" to="/page-team-details">Darlene
                                        Robertson</Link></h4>
                                <span className="sub-title">Junior Executive</span>
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