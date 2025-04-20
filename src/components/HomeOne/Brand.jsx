import React from 'react';
import BrandImage1 from '../../assets/images/brand/brand-image1.png';
import BrandImage2 from '../../assets/images/brand/brand-image2.png';
import BrandImage3 from '../../assets/images/brand/brand-image3.png';
import BrandImage4 from '../../assets/images/brand/brand-image4.png';
import BrandImage5 from '../../assets/images/brand/brand-image5.png';
import BrandImage6 from '../../assets/images/brand/brand-image6.png';

function BrandSection({ className }) {
    return (
        <div className={`brand-area ${className || ''}`}>
            <div className="row g-0">
                <div className="col-6 col-lg-2">
                    <div className="brand__item">
                        <img src={BrandImage1} alt="image"/>
                    </div>
                </div>
                <div className="col-6 col-lg-2">
                    <div className="brand__item">
                        <img src={BrandImage2} alt="image"/>
                    </div>
                </div>
                <div className="col-6 col-lg-2">
                    <div className="brand__item">
                        <img src={BrandImage3} alt="image"/>
                    </div>
                </div>
                <div className="col-6 col-lg-2">
                    <div className="brand__item">
                        <img src={BrandImage4} alt="image"/>
                    </div>
                </div>
                <div className="col-6 col-lg-2">
                    <div className="brand__item">
                        <img src={BrandImage5} alt="image"/>
                    </div>
                </div>
                <div className="col-6 col-lg-2">
                    <div className="brand__item">
                        <img src={BrandImage6} alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandSection;
