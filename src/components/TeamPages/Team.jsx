import React from 'react';
import { Link } from 'react-router-dom';
import TeamMember1 from '../../assets/images/team/team-four-image1.jpg'; 
import TeamMember2 from '../../assets/images/team/team-four-image2.jpg'; 
import TeamMember3 from '../../assets/images/team/team-four-image3.jpg'; 
import TeamMember4 from '../../assets/images/team/team-four-image4.jpg'; 
import TeamMember5 from '../../assets/images/team/team-four-image5.jpg'; 
import TeamMember6 from '../../assets/images/team/team-four-image6.jpg'; 


const teamh2 = [
  { id: 1, img: TeamMember1, title: "Brooklyn Simmons", desig: "Marketing Leader" },
  { id: 2, img: TeamMember2, title: "Leslie Alexander", desig: "CEO & Founder" },
  { id: 3, img: TeamMember3, title: "Charlotte Martinez", desig: "Web Designer" },
  { id: 4, img: TeamMember4, title: "Marvin McKinney", desig: "Marketing Leader" },
  { id: 5, img: TeamMember5, title: "Arlene McCoy", desig: "Co-Ordinator" },
  { id: 6, img: TeamMember6, title: "Darlene Robertson", desig: "Merchandiser" },
];

function TeamSection({ className }) {
    return (
        <section className={`team-area pt-130 pb-130 ${className || ''}`}>
            <div className="container-lg">
                <div className="row g-4 g-lg-5">
                    {teamh2.map((teamh2) => (
                        <div key={teamh2.id} className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="00ms"
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
                                    <img src={teamh2.img} alt="image"/>
                                </div>
                                <h4><Link className="hover-link" to="/page-team-details">{teamh2.title}</Link></h4>
                                <span>{teamh2.desig}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
