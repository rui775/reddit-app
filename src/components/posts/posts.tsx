import React from 'react';
import posts from '../../temp_stuff/posts.json';
import { UpArrow } from '../../features/arrows/upArrow';
import { DownArrow } from '../../features/arrows/downArrow';

const Posts: React.FC = () => {
    return (
        <div className="flex flex-col w-3/4 items-center">
            {posts.map((post, index) => (
                <div key={index} className="flex bg-white rounded-md shadow-md mb-5 px-5">
                    <div className="flex flex-col items-center mr-4 mt-16">
                        <UpArrow />
                        <h3>45</h3>
                        <DownArrow />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col py-4 ps-5">
                            <h2 className="text-lg font-bold">{post.title}</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={post.image} alt={post.title} className="h-auto object-cover rounded-md" />
                        </div>
                        <div className="flex justify-between w-full border-t border-gray-200 mt-5 px-3 py-3">
                            <p>author</p>
                            <div className="flex">
                                <p>@</p>
                                <p>45</p>
                            </div>
                        </div>
                    </div>


                </div>
            ))}
        </div>

    );
};

export default Posts;
