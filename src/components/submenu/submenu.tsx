import React from 'react';
import subreddits from '../../temp_stuff/subreddits.json';

const Submenu: React.FC = () => {
    return (
        <aside className="w-1/4 bg-gray-100 p-4 shadow-2xl shadow-gray-500 rounded-md">
            <h2 className="text-xl font-bold mb-4">Subreddits</h2>
            {/* Add menu items here */}
            <ul>
                {subreddits.map((subreddit, index) => (
                    <li key={index} className="mb-2">
                        <a href="" className="flex items-center space-x-2">
                            <div dangerouslySetInnerHTML={{ __html: subreddit.logo }} />
                            <h3 className="text-gray-400 font-bold">{subreddit.name}</h3>
                        </a>
                    </li>
                ))}
                {/* <li className="mb-2"><a href="#">Menu Item 1</a></li>
                <li className="mb-2"><a href="#">Menu Item 2</a></li>
                <li className="mb-2"><a href="#">Menu Item 3</a></li> */}
            </ul>
        </aside>
    );
};

export default Submenu;
