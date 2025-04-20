import React, { useEffect, useRef } from 'react';
import VideoImage1 from '../../assets/images/video/video.mp4'; 
import VideoBgImage from '../../assets/images/bg/video-four-bg.jpg'; 


function Video() {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
        // Attempt to autoplay the video
        videoRef.current.play().catch((error) => {
            console.error('Autoplay failed:', error);
        });
        }
    }, []);
    return (
        <>

        <section className="video-four-area">
            <div className="row g-0">
                <div className="col-lg-7">
                    <div className="video-four__video">
                        <video ref={videoRef} muted loop playsInline autoPlay>
                            <source src={VideoImage1} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="video-four__content" style={{ backgroundImage: `url(${VideoBgImage})` }}>
                        <h2 className="wow text-white splt-txt" data-splitting>Get to Know the Incredible Our Team member</h2>
                        <p className="text-white">Our focus is on delivering Superior value to our <br /> clients for Company modification.</p>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Video
