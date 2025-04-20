import React from 'react';
import ParallaxImage from '../../assets/images/icon/parallax-icon.png';
import ParallaxBgImage from '../../assets/images/bg/parallax.jpg';

function Parallax() {
    return (
        <div className="parallax-area" data-speed="0.3" data-parallax="scroll"
            style={{ backgroundImage: `url(${ParallaxBgImage})` }}>
            <div className="parallax__icon">
                <img className="animation__rotate" src={ParallaxImage} alt="icon"/>
            </div>
        </div>
    );
}
export default Parallax;
