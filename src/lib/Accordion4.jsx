import { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Default to first item open

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active state
    };

    const faqData = [
        { question: "What are the primary goals of your business?", answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments." },
        { question: "How do you currently engage with them?", answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments." },
        { question: "What are the biggest challenges your business is facing right now?", answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments." },
        { question: "What differentiates your business from competitors?", answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments." },
        { question: "Can you provide examples of successful client outcomes?", answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments." },
        { question: "What is your approach to investment planning and management?", answer: "We work with a variety of clients. We work with the heads of municipalities’ transportation planning, traffic engineering, or economic development departments." }
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
