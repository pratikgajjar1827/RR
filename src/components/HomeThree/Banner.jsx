import React from 'react';
import { Link } from 'react-router-dom';
import SlideImage1 from '../../assets/images/banner/banner-three-arry.png'; 
import SlideImage2 from '../../assets/images/banner/banner-three-text.png'; 
import BannerBgImage from '../../assets/images/banner/banner-three-image.jpg';
;

function BannerSection() {
    return (

        <section id="contact" className="banner-three-area" style={{ backgroundImage: `url(${BannerBgImage})` }}>
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-xl-7">
                        <div className="banner-three__content">
                            <h1 className="title wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">Secure the
                                Future with Expert Financial Guidance!</h1>
                            <p className="text wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">We a group
                                of design company that amplify creativity from brands and design
                                to
                                marketing and digital strategies.</p>
                            <Link to="/page-about" className="arry-btn"><i className="fa-thin fa-arrow-right wow fadeInLeft"
                                    data-wow-delay="500ms" data-wow-duration="1500ms"></i></Link>
                            <div className="arry">
                                <img className="animation__arryUpDown" src={SlideImage1}
                                    alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="banner-three__form">
                            <h3 className="title">Booking For Consultation</h3>
                            <form action="#">
                                <input type="text" placeholder="Full Name*"/>
                                <input type="email" placeholder="Email Address*"/>
                                <select className="mt-20" name="day" id="subject">
                                    <option value="0">Select Date</option>
                                    <option value="monday">Monday</option>
                                    <option value="tuesday">Tuesday</option>
                                    <option value="wednesday">Wednesday</option>
                                    <option value="thursday">Thursday</option>
                                    <option value="friday">Friday</option>
                                    <option value="saturday">Saturday</option>
                                    <option value="sunday">Sunday</option>
                                </select>
                                <textarea className="mt-4 rounded-0" name="masage" id="masage"
                                    placeholder="Write a Message"></textarea>
                                <Link to="#0" className="btn-one-light rounded-0 w-100 mt-20" data-splitting
                                    data-text="Submit">Submit</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-three__text wow">
                <img src={SlideImage2} alt="image"/>
            </div>
        </section>
    );
}

export default BannerSection;
