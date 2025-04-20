import React from 'react';
import { Link } from 'react-router-dom';
import TeamMember1 from '../../assets/images/resource/team-1.jpg'; // Adjust path as necessary
import TeamMember2 from '../../assets/images/resource/team-2.jpg'; // Adjust path as necessary
import TeamMember3 from '../../assets/images/resource/team-3.jpg'; // Adjust path as necessary

const teamh2 = [
  { id: 1, img: TeamMember1, title: "Jessica Brown ", desig: "Manager" },
  { id: 2, img: TeamMember2, title: "Richerd Fred ", desig: "Developer" },
  { id: 3, img: TeamMember3, title: "Michale Smith ", desig: "Co Founder" },
];

function TeamSection({ className }) {
    return (
        <section className={`team-section ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Our Workers</span>
                    <h2>Meet expert team</h2>
                </div>

                <div className="row">
                    {teamh2.map((teamh2) => (
                        <div key={teamh2.id} className="team-block col-lg-4 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/team-details">
                                            <img src={teamh2.img} alt="Jessica Brown" />
                                        </Link>
                                    </figure>
                                    <div className="social-links">
                                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <span className="designation">{teamh2.desig}</span>
                                    <h4 className="name">
                                        <Link to="/team-details">{teamh2.title}</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
