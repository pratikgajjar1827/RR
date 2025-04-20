import React from 'react';
import { Link } from 'react-router-dom';
import BrandImage1 from '../../assets/images/brand/brand-six-image1.png'; 
import BrandImage2 from '../../assets/images/brand/brand-six-image2.png'; 
import BrandImage3 from '../../assets/images/brand/brand-six-image3.png'; 
import BrandImage4 from '../../assets/images/brand/brand-six-image4.png'; 
import BrandImage5 from '../../assets/images/brand/brand-six-image5.png'; 
import BrandImage6 from '../../assets/images/brand/brand-six-image6.png'; 
import BrandImage7 from '../../assets/images/brand/brand-six-image7.png'; 
import BrandImage8 from '../../assets/images/brand/brand-six-image8.png'; 
import BrandImage9 from '../../assets/images/brand/brand-six-image9.png'; 
import BrandImage10 from '../../assets/images/brand/brand-six-image10.png'; 

function Brand() {
    return (
        <>
        <section className="brand-six-area">
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h6>OUR CLIENTS</h6>
                    <h2 className="wow splt-txt" data-splitting>Those who trusted us</h2>
                </div>
                <div className="brand-six__wrp">
                    <Link to="#0" className="brand-six__item">
                        <img src={BrandImage1} alt="image"/>
                    </Link>
                    <Link to="#0" className="brand-six__item">
                        <img src={BrandImage2} alt="image"/>
                    </Link>
                    <Link to="#0" className="brand-six__item">
                        <img src={BrandImage3} alt="image"/>
                    </Link>
                    <Link to="#0" className="brand-six__item">
                        <img src={BrandImage4} alt="image"/>
                    </Link>
                    <Link to="#0" className="brand-six__item">
                        <img src={BrandImage5} alt="image"/>
                    </Link>
                </div>

                <div className="brand-six__wrp wrp-bottom">
                    <Link to="#0" className="brand-six__item">
                        <img src={BrandImage6} alt="image"/>
                    </Link>
                    <Link to="#0" className="brand-six__item">
                        <img src={BrandImage7} alt="image"/>
                    </Link>
                    <Link to="#0" className="brand-six__item">
                        <img src={BrandImage8} alt="image"/>
                    </Link>
                    <Link to="#0" className="brand-six__item">
                        <img src={BrandImage9} alt="image"/>
                    </Link>
                    <Link to="#0" className="brand-six__item">
                        <img src={BrandImage10} alt="image"/>
                    </Link>
                </div>
                <div className="brand-six__text mt-50">
                    <h5 className="text">2.6k Companies and Individuals Have Trusted Us. <Link to="#0"
                            className="hover-link">View All Clients <i className="fa-solid fa-chevron-right"></i></Link></h5>
                </div>
            </div>
        </section>

        </>
    )
}
export default Brand