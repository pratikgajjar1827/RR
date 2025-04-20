import React, { useState } from 'react';
import VideoBgImage from '../../assets/images/bg/video-bg.jpg';
import ModalVideo from 'react-modal-video';

function OfferSection({ className }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={`video-area ${className || ''}`}>
            <div className="video__wrp" style={{ backgroundImage: `url(${VideoBgImage})` }}>
                <div className="video__btn">
                    <div className="btn-video video-pulse">
                        <a className="video-popup" onClick={() => setOpen(true)}><i
                            className="fa-sharp fa-light fa-play"></i></a>
                    </div>
                </div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
            </div>
        </div>
    );
}

export default OfferSection;
