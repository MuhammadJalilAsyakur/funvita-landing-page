import React from 'react';

function HeroSection() {
    return (
        <div className="relative text-blue-900 p-4 md:p-20 flex justify-center items-center flex-col bg-[url('https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg')] bg-cover bg-center bg-no-repeat min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-transparent opacity-90"></div>
            <div className="relative z-10 text-center transition-opacity duration-1000 ease-out opacity-100 animate-fadeOut">
                <h1 className="text-white text-4xl md:text-6xl font-bold">PT. Funvita Indonesia Investama</h1>
                <p className="text-white text-lg md:text-2xl mt-4">Expert Consulting & Training Services</p>
                <p className="text-white text-lg md:text-2xl mt-2">Business Consulting, Digital Marketing, Financial Literacy, Branding, Public Speaking, Collaboration</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 transform transition-transform duration-300 hover:scale-110">
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
