import React from 'react';
import { Link } from 'react-router-dom';
import PageTitleBg from '../assets/images/banner/banner-inner.jpg';

function HeroPageTitle({ title, breadcrumb = [] }) {
    return (
        <section className="breadcrumb-area" style={{ backgroundImage: `url(${PageTitleBg})` }}>
            <div className="container">
                <div className="breadcrumb__wrp">
                    <div className="breadcrumb__item">
                        <h1 className="title">{title}</h1>
                        <ul>
                            {breadcrumb.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroPageTitle;