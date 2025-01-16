import React, { useState, useEffect } from 'react';
import Logo from "./../assets/logo/logo-white-transparent.png";
import LogoColor from "./../assets/logo/logo-color-transparent.png";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Header */}
            <header className={`p-2 flex justify-between items-center px-4 md:px-20 fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${isScrolled ? 'bg-gradient-to-r from-blue-800 to-blue-900 text-white' : 'bg-transparent text-white'}`}>
                <img src={Logo} className={`transition-all duration-500 ${isScrolled ? 'md:w-16 w-12' : 'md:w-20 w-16'} z-40`} alt="Funvita Indonesia" />

                <nav className="hidden md:flex space-x-4 md:text-lg gap-5 font-semibold">
                    <a href="#beranda" className="hover:underline">Beranda</a>
                    <a href="#about-us" className="hover:underline">About Us</a>
                    <a href="#kontak" className="hover:underline">Kontak</a>
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none z-50">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden fixed top-16 left-0 right-0 bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 h-full overflow-y-auto z-50 transition-transform duration-500 ease-in-out transform translate-x-0">
                        <div className="flex flex-col items-center font-semibold">
                            <a href="#beranda" className="block px-4 py-2 text-sm hover:bg-blue-800 w-full text-center">Beranda</a>
                            <a href="#about-us" className="block px-4 py-2 text-sm hover:bg-blue-800 w-full text-center">About Us</a>
                            <a href="#kontak" className="block px-4 py-2 text-sm hover:bg-blue-800 w-full text-center">Kontak</a>
                            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full mt-2 hover:bg-blue-700">Sign In</button>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}

export default Header;
