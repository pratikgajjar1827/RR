import React from 'react';
import { Link } from 'react-router-dom';


function MapHomeTwo({ className }) {
    return (
        <>
        <section className={`map-section ${className || ''}`}>
            <iframe className="map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"> </iframe>
        </section>
        </>
    );
}

export default MapHomeTwo;
