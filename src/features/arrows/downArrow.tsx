import React from "react";

export const DownArrow: React.FC = () => {
    return (
        <div className="flex items-center w-8 h-8">
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7071 12.2929C16.3166 11.9024 15.6834 11.9024 15.2929 12.2929L13 14.5858V7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V14.5858L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L11.2929 17.7071C11.6834 18.0976 12.3166 18.0976 12.7071 17.7071L16.7071 13.7071C17.0976 13.3166 17.0976 12.6834 16.7071 12.2929Z" fill="#000000" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" fill="#000000" />
            </svg>
        </div>
    );
};
