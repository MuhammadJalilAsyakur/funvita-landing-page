import React, { useState } from 'react';

function JoinUs() {
    const reasons = [
        {
            title: 'Extensive Experience',
            description: 'We have years of experience in helping businesses grow with measurable strategies.',
            icon: '🌟'
        },
        {
            title: 'Professional Team',
            description: 'Our expert team is dedicated to providing the best solutions tailored to your business needs.',
            icon: '👩‍💻'
        },
        {
            title: 'Leading Innovation',
            description: 'We always use the latest technology to ensure your business remains competitive.',
            icon: '🚀'
        },
        {
            title: 'Personal Approach',
            description: 'We believe that every business is unique, so our solutions are always customized to your specific needs.',
            icon: '🤝'
        }
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="join-us-section bg-gradient-to-br from-indigo-50 to-indigo-100 py-16">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <h2 className="text-4xl font-extrabold mb-6 text-blue-900 text-center relative">
                    Why Choose Us?
                    <span className="block mt-2 w-20 h-1 mx-auto bg-gradient-to-r from-blue-600 to-blue-900 rounded-full"></span>
                </h2>
                <p className="text-lg mb-10 text-gray-600 text-center">
                    PT. Funvita Indonesia Investama is a trusted partner for your business development.
                </p>

                {/* Tab Navigation */}
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                    {reasons.map((reason, index) => (
                        <button
                            key={index}
                            className={`px-6 py-3 text-lg font-semibold rounded-full transition-colors duration-300 
                                ${activeTab === index
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-gray-200 text-blue-900 hover:bg-blue-600 hover:text-white'
                                }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {reason.icon} {reason.title}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-10 p-8 bg-white shadow-lg rounded-lg text-center transition-transform duration-300">
                    <div className="text-4xl mb-4 text-blue-900">{reasons[activeTab].icon}</div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">{reasons[activeTab].title}</h3>
                    <p className="text-gray-700 text-lg">{reasons[activeTab].description}</p>
                </div>
            </div>
        </section>
    );
}

export default JoinUs;
