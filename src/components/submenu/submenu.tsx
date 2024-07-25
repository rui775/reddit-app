import React from 'react';

const Menu: React.FC = () => {
    return (
        <aside className="w-1/5 bg-gray-200 p-4">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            {/* Add menu items here */}
            <ul>
                <li className="mb-2"><a href="#">Menu Item 1</a></li>
                <li className="mb-2"><a href="#">Menu Item 2</a></li>
                <li className="mb-2"><a href="#">Menu Item 3</a></li>
            </ul>
        </aside>
    );
};

export default Menu;
