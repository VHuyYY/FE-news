import React from 'react';

const ArticleItem = ({ title, image }) => {
    return (
        <article className=" overflow-hidden  pb-4">
            {image ? (
                <div className="flex items-start space-x-4">
                    <img
                        src={image}
                        alt={title}
                        className="w-62 h-42 object-cover flex-shrink-0"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800 leading-tight">{title}</h3>
                    </div>
                </div>
            ) : (
                <div>
                    <h3 className="font-semibold text-gray-800 leading-tight">{title}</h3>
                </div>
            )}
        </article>
    );
};

export default ArticleItem;