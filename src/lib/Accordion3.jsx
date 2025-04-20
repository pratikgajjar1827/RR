import { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Default to first item open

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active state
    };

    const faqData = [
        { question: "What is your company’s mission, vision, and core values?", answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning traffic engineering, or economic development departments." },
        { question: "What is your approach to financial planning?", answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning traffic engineering, or economic development departments." },
        { question: "What are your current customer acquisition costs (CAC)?", answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning traffic engineering, or economic development departments." },
        { question: "How do you currently handle risk management?", answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning traffic engineering, or economic development departments." }
    ];

    return (
        <div className="accordion" id="accordionExample">
            {faqData.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                            type="button"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeIndex === index}
                        >
                            {item.question}
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
                    >
                        <div className="accordion-body">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
