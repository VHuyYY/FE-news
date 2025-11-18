import React from 'react';

export const MainArticle = ({ image, title, subtitle }) => (
    <div className="p-4 border-r border-gray-300">
        <img src={image} alt={title} className="w-full h-auto " />
        <h2 className="text-2xl font-bold mt-4 text-left">{title}</h2>
        <p className="text-base text-gray-500 mt-2 text-left">{subtitle}</p>
    </div>
);

export const SideArticle = ({ image, title, border }) => (
    <div className={`gap-4 pr-2 ${border ? 'border-b border-gray-300 pb-3' : ''} mt-4`}>
        <img src={image} alt={title} className="w-64 h-42 object-cover mb-2" />
        <h4 className="text-lg text-left font-semibold">{title}</h4>
    </div>
);

export const RightSideArticle = ({ image, title,border }) => (
    <div className={`flex items-center gap-4   pb-4 mt-3 ${border ? 'border-b border-gray-300 pb-3' : ''}`}>
        <img src={image} alt={title} className="w-32 h-20 object-cover" />
        <h4 className="text-lg font-semibold text-left">{title}</h4>

    </div>
);

export const SubSectionCard = ({ image, title }) => (
    <div className="flex-none w-64 bg-white rounded-md shadow-md p-2">
        <img src={image} alt={title} className="w-full h-auto rounded-md" />
        <h3 className="text-sm font-semibold mt-2">{title}</h3>
    </div>
);