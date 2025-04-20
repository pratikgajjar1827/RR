import React from 'react'; 
import WorkImage1 from '../../assets/images/work/work-ten-image1.png'; 
import WorkImage2 from '../../assets/images/work/work-ten-image2.png'; 
import WorkImage3 from '../../assets/images/work/work-ten-image3.png'; 
import WorkImage4 from '../../assets/images/work/work-ten-image4.png'; 

function WorkSection() {
    return (
        <section className="work-ten-area pt-130 pb-130">
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h6>HOW IT WORKS</h6>
                    <h2 className="wow splt-txt" data-splitting>How We Drive Your Business <br /> to Success</h2>
                </div>
                <div className="work-ten__wrp">
                    <div className="work-ten__item">
                        <div className="image">
                            <img src={WorkImage1} alt="image"/>
                            <span className="number">1</span>
                        </div>
                        <div className="content">
                            <h4 className="title">Ideation</h4>
                            <p>We meet customers in set place to discuss the details about needs
                                & demands now.</p>
                        </div>
                    </div>
                    <div className="work-ten__item">
                        <div className="image">
                            <img src={WorkImage2} alt="image"/>
                            <span className="number">2</span>
                        </div>
                        <div className="content">
                            <h4 className="title">Discussion</h4>
                            <p>We meet customers in set place to discuss the details about needs
                                & demands now.</p>
                        </div>
                    </div>
                    <div className="work-ten__item">
                        <div className="image">
                            <img src={WorkImage3} alt="image"/>
                            <span className="number">3</span>
                        </div>
                        <div className="content">
                            <h4 className="title">Error & Testing</h4>
                            <p>We meet customers in set place to discuss the details about needs
                                & demands now.</p>
                        </div>
                    </div>
                    <div className="work-ten__item">
                        <div className="image">
                            <img src={WorkImage4} alt="image"/>
                            <span className="number">4</span>
                        </div>
                        <div className="content">
                            <h4 className="title">Initiate</h4>
                            <p>We meet customers in set place to discuss the details about needs
                                & demands now.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkSection;
