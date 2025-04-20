import React, { useState } from 'react'; 
import VideoBgImage from '../../assets/images/bg/video-two-bg.jpg'; 
import ModalVideo from 'react-modal-video';

function Video() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>

        <div className="video-two-area">
            <div className="video-two__wrp" data-speed="0.3" data-parallax="scroll"
                style={{ backgroundImage: `url(${VideoBgImage})` }}>
                <div className="video-two__btn">
                    <div className="btn-video video-pulse">
                        <a className="video-popup" onClick={() => setOpen(true)}><i
                                className="fa-sharp fa-light fa-play"></i></a>
                    </div>
                </div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
            </div>
        </div>

        </>
    )
}
export default Video
