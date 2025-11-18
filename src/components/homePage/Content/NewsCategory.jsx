import React from 'react';
import ArticleItem from "./ArticleItem.jsx";
import AdBank from "./AdBank.jsx";
import ScheduleFootball from "./ScheduleFootball.jsx";

const adComponents = {
    AdBank: <AdBank />,
    ScheduleFootball: <ScheduleFootball />
};

const NewsCategory = ({ title, categories, mainArticle, bulletPoints, adComponent }) => {
    return (
        <div className="md:col-span-2 space-y-6 pl-1 border-t border-gray-200 pt-5">
            <div className="flex items-center space-x-4 pb-0">
                <h2 className="text-2xl font-semibold underline decoration-gray-50 underline-offset-6">{title}</h2>
                <div className="flex space-x-2 text-base text-gray-500">
                    {categories.map((cat, index) => (
                        <span key={index}>{cat}</span>
                    ))}
                </div>
            </div>

            <div className="flex space-x-5">
                <div className="w-3/4 flex space-x-4 border-r border-gray-300 pr-3">
                    <img
                        src={mainArticle.image}
                        alt={mainArticle.headline}
                        className="w-66 h-40 object-cover"
                    />
                    <div className="w-1/2 ">
                        <h3 className="font-semibold text-lg leading-tight text-left">{mainArticle.headline}</h3>
                        <p className="mt-2 text-sm text-left text-gray-600">
                            {mainArticle.summary}
                        </p>
                    </div>
                </div>

                <div className="w-1/3 text-left">
                    <h3 className="font-semibold text-lg leading-tight">{mainArticle.subHeadline}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                        {mainArticle.subSummary}
                    </p>
                </div>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-6 border-b pb-6 text-left">
                <div className="flex space-x-12">
                    {bulletPoints.map((point, index) => (
                        <ul key={index} className="w-1/3 list-disc pl-5">
                            <li><a href="#" className="text-black hover:underline">{point}</a></li>
                        </ul>
                    ))}
                </div>
            </div>

            {/* Logic để hiển thị component tương ứng */}
            {adComponent && adComponents[adComponent]}
        </div>
    );
};

export default NewsCategory;