import React from 'react';
import { LogoTemplate, SearchBar } from '../../features/index';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-orange-600 shadow-xl  shadow-gray-500">
            <div className="container mx-auto flex items-center justify-between">
                <LogoTemplate />
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;

