import React from 'react';

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

    return (
        <section className="join-us-section bg-gradient-to-br from-indigo-50 to-indigo-100 py-16">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4xl font-extrabold mb-6 text-indigo-800 relative">
                    Why Choose Us?
                    <span className="block mt-2 w-20 h-1 mx-auto bg-indigo-600 rounded-full"></span>
                </h2>
                <p className="text-lg mb-10 text-gray-600">
                    PT. Funvita Indonesia Investama is a trusted partner for your business development.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="reason-card group p-6 shadow-lg rounded-xl bg-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-700 hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-t from-indigo-900 to-indigo-600"></div>
                            <div className="icon flex items-center justify-center w-16 h-16 mb-4 bg-indigo-100 rounded-full text-4xl text-indigo-600 group-hover:bg-white group-hover:text-indigo-900 transition-colors">
                                {reason.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-indigo-800 group-hover:text-white transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-indigo-200 transition-colors">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default JoinUs;
