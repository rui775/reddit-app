import React from "react";

export const SearchBar: React.FC = () => {
    return (
        <div className="flex-grow text-center">
            <input
                type="text"
                placeholder="Search..."
                className="w-1/2 py-1 px-4 border border-gray-300 rounded-lg"
            />
        </div>
    );
};