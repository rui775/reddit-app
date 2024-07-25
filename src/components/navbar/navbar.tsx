import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a href="#">
                        <img src="/path/to/logo.png" alt="Logo" className="h-8" />
                    </a>
                </div>

                {/* Search Bar */}
                <div className="flex-grow text-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-1/2 py-2 px-4 border border-gray-300 rounded-lg"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

