import React from 'react';
import img from '../../../../public/banner.png';

const AdSection = () => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <img
                src={img}
                alt="Quảng cáo"
                className="w-full h-auto object-cover"
            />
        </div>
    );
};

export default AdSection;