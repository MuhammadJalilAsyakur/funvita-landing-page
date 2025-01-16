import LogoColor from "./../assets/logo/logo-color-transparent.png";

function AboutUs() {
    return (
        <section id="about-us" className="py-16 px-6 md:px-20 md:mt-16 bg-gradient-to-b from-white to-blue-50 text-blue-900">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="max-w-lg text-center md:text-left space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Empower Your Business with Expert Consulting & Training Services
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600">
                            PT. Funvita Indonesia Investama is a leading consulting and training company specializing in business consulting, digital marketing training, financial literacy training, product branding, public speaking, and collaboration. We are committed to delivering personalized solutions that help businesses thrive in a competitive market.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600">
                            Our team of experts combines deep industry knowledge with innovative strategies to empower businesses, enhance skills, and unlock growth opportunities.
                        </p>
                        <button className="bg-gradient-to-r  from-blue-700 to-blue-900 text-white py-3 px-6 rounded-full shadow-lg font-semibold mt-4 transition-transform duration-300 hover:scale-105 
                            hover:from-white hover:to-white hover:text-blue-500 hover:border hover:border-blue-500">
                            Learn More
                        </button>
                    </div>
                    {/* Logo Section */}
                    <div className="relative mb-8 md:mb-0">
                        {/* Gradient Background Behind Logo */}
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full blur-3xl opacity-50"></div>
                        </div>
                        {/* Logo Image */}
                        <img
                            src={LogoColor}
                            alt="Funvita Logo"
                            className="relative z-10 w-64 mx-auto md:w-72 transform hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
