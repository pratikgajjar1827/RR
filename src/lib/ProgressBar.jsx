import React, { useEffect, useState } from 'react';
const ProgressBar = ({ title, targetPercentage }) => {
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
            <div className="progress-area mt-50">
                <div className="progress__title mb-1">
                    <h4>{title}</h4>
                    <span className="progress-count">{percentage}%</span>
                </div>
                <div className="progress">
                    <div className="progress-bar wow slideInLeft" data-wow-duration=".55s"
                        role="progressbar" style={{ width: `${percentage}%` }}>
                    </div>
                </div>
            </div>
    );
};

export default ProgressBar;
