import React, { useState } from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import Marquee from '../HomeTwo/Marquee2.jsx';
import PageTitle from '../PageTitle.jsx';
function Faq({ className }) {
    // Manage the state to track which accordion is open
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle function for accordion items
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Accordion data
    const faqs = [
        {
            question: "What are the primary goals of your business?",
            answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments."
        },
        {
            question: "How do you currently engage with them?",
            answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments."
        },
        {
            question: "What are the biggest challenges your business is facing right now?",
            answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments."
        },
        {
            question: "What differentiates your business from competitors?",
            answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments."
        },
    ];

    return (
        <>
        <Header />
        <PageTitle
            title="FAQ"
            breadcrumb={[
                { link: '/', title: 'Home' },
                { link: '/faq', title: 'FAQ' },
            ]}
        />
        <section className={`faq-one-area pt-130 pb-0 ${className || ''}`}>
            <div className="container-lg">
                <div className="faq-one__wrp">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="faq-one__accordion">
                                <div className="section-header mb-30">
                                    <h3>Knowledge about business</h3>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    {faqs.map((faq, index) => (
                                    <li key={index} className={`accordion-item ${activeIndex === index ? 'active-block' : ''}`} >
                                        <div className={`accordion-header ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)} >
                                            {faq.question}
                                        </div>
                                        <div className={`accordion-collapse ${activeIndex === index ? 'show' : ''}`}>
                                            <div className="content">
                                                <div className="text">{faq.answer}</div>
                                            </div>
                                        </div>
                                    </li>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-one__accordion">
                                <div className="section-header mb-30">
                                    <h3>Knowledge about invesment</h3>
                                </div>
                                <div className="accordion" id="accordionExample2">
                                    {faqs.map((faq, index) => (
                                    <li key={index} className={`accordion-item ${activeIndex === index ? 'active-block' : ''}`} >
                                        <div className={`accordion-header ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)} >
                                            {faq.question}
                                        </div>
                                        <div className={`accordion-collapse ${activeIndex === index ? 'show' : ''}`}>
                                            <div className="content">
                                                <div className="text">{faq.answer}</div>
                                            </div>
                                        </div>
                                    </li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Marquee />
        <Footer />
        <BackToTop />
        </>
    );
}

export default Faq;
