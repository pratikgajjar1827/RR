import React from "react";
import VideoImage from '../../assets/images/bg/video-nine-bg.jpg'; 

function AboutSection() {
    return (
        <>
        <div className="video-area">
            <div className="video__wrp" data-speed="0.3" data-parallax="scroll"
                style={{ backgroundImage: `url(${VideoImage})` }}></div>
        </div>
        </>
    )
}

export default AboutSection;
