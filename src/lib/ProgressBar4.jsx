import React, { useEffect, useState } from 'react';
const ProgressBar3 = ({ title, targetPercentage }) => {
    const [percentage, setPercentage] = useState(0);
    const animationDuration = 3000;
    useEffect(() => {
        const increment = targetPercentage / (animationDuration / 10);
        let currentPercentage = 0;

        const interval = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= targetPercentage) {
                currentPercentage = targetPercentage;
                clearInterval(interval);
            }
            setPercentage(Math.floor(currentPercentage));
        }, 10);
        return () => clearInterval(interval);
    }, [targetPercentage, animationDuration]);
    return (
            <div className="progress-area mt-30">
                <div className="progress__title">
                    <h5>Professionality</h5>
                    <span className="progress-count">{percentage}%</span>
                </div>
                <div className="progress">
                    <div className="progress-bar wow slideInLeft" data-wow-duration=".80s"
                        role="progressbar" style={{ width: `${percentage}%` }} aria-valuenow="86"
                        aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
    );
};

export default ProgressBar3;
