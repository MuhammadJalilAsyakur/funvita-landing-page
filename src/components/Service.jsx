import React, { useState } from 'react';

function Service() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDescription = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const services = [
        {
            title: "Business Consultant",
            description:
                "We help you design effective business strategies to improve your company's performance and achieve sustainable growth.",
        },
        {
            title: "Digital Marketing Training",
            description:
                "Our training covers the latest digital marketing strategies to help you reach a wider audience and increase conversions.",
        },
        {
            title: "Digital Financial Literacy Training",
            description:
                "We provide training to understand digital financial management so you can make better financial decisions.",
        },
        {
            title: "Product Branding Training",
            description:
                "Our training focuses on how to build a strong product brand to compete in a competitive market.",
        },
        {
            title: "Public Speaking",
            description:
                "We train public speaking skills to boost your confidence in delivering ideas clearly and effectively.",
        },
        {
            title: "Collaboration",
            description:
                "We open collaboration opportunities to help you create innovative solutions based on your business needs.",
        },
    ];

    return (
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-8 md:p-16">
            {/* Services Section */}
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center animate-fadeIn">
                Main Services
            </h2>
            <div className="space-y-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative group border-t border-gray-500 pt-6"
                    >
                        {/* Title */}
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleDescription(index)}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold transition-transform duration-300 ease-in-out transform group-hover:scale-105 animate-slideInLeft">
                                {service.title}
                            </h3>
                            <div
                                className={`text-2xl transition-transform duration-300 transform ${activeIndex === index ? "rotate-45 -translate-x-2" : "group-hover:translate-x-2"
                                    }`}
                            >
                                ↙
                            </div>
                        </div>
                        {/* Description */}
                        <div
                            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index
                                ? "max-h-screen animate-fadeIn"
                                : "max-h-0"
                                }`}
                        >
                            <p className="mt-4 text-lg md:text-xl text-gray-200 animate-slideInUp">
                                {service.description}
                            </p>
                            <div className="mt-6 flex justify-end">
                                <button className="px-8 py-3 text-lg font-semibold bg-white text-blue-900 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;
