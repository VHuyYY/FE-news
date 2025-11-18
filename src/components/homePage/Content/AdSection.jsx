import React from 'react';
import img from '../../../../public/banner.png';

const AdSection = () => {
    return (
        <div className="space-y-6 mt-5">
            {/* Quảng cáo lớn trên cùng */}

                <img
                    src={img}
                    alt="Quảng cáo"
                    className="w-full h-[650px] object-cover"
                />

        </div>
    );
};

export default AdSection;