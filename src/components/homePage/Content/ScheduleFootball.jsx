import React from 'react';

function ScheduleFootball(props) {
    return(
        <>
            <div className="flex items-center space-x-2 p-2  relative border-1 border-gray-200">
                <div className="flex space-x-2 overflow-hidden">
                    {/* Thẻ 1 */}
                    <div className="flex-none p-2  rounded-lg ">
                        <div className="text-[12px] text-gray-500 mb-1">Hôm nay, 01:45</div>
                        <div className="flex items-center space-x-2">
                            <img src="https://flagcdn.com/w20/fr.png" alt="Pháp" className="w-4 h-4"/>
                            <span className="font-bold text-[12px]">Pháp</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                            <img src="https://flagcdn.com/w20/az.png" alt="Azerbaijan" className="w-4 h-4"/>
                            <span className="font-bold text-[12px]">Azerbaijan</span>
                        </div>
                    </div>
                    {/* Thẻ 2 */}
                    <div className="flex-none p-2  rounded-lg">
                        <div className="text-[12px] text-gray-500 mb-1">Hôm nay, 01:45</div>
                        <div className="flex items-center space-x-2">
                            <img src="https://flagcdn.com/w20/de.png" alt="Đức" className="w-4 h-4"/>
                            <span className="font-bold text-[12px]">Đức</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                            <img src="https://flagcdn.com/w20/lu.png" alt="Luxembourg" className="w-4 h-4"/>
                            <span className="font-bold text-[12px]">Luxembourg</span>
                        </div>
                    </div>
                    {/* Thẻ 3 */}
                    <div className="flex-none p-2  rounded-lg">
                        <div className="text-sm text-gray-500 mb-1">Ngày mai, 00:15</div>
                        <div className="flex items-center space-x-2">
                            <img src="https://flagcdn.com/w20/ae.png" alt="UAE" className="w-4 h-4"/>
                            <span className="font-bold text-[12px]">UAE</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                            <img src="https://flagcdn.com/w20/om.png" alt="Oman" className="w-4 h-4"/>
                            <span className="font-bold text-[12px]">Oman</span>
                        </div>
                    </div>
                    {/* Thẻ 4 */}
                    <div className="flex-none p-2  rounded-lg">
                        <div className="text-sm text-gray-500 mb-1">Ngày mai, 01:45</div>
                        <div className="flex items-center space-x-2">
                            <img src="https://flagcdn.com/w20/es.png" alt="Tây Ban Nha" className="w-4 h-4"/>
                            <span className="font-bold text-[12px]">Tây Ban Nha</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                            <img src="https://flagcdn.com/w20/ge.png" alt="Gruzia" className="w-4 h-4"/>
                            <span className="font-bold text-[12px]">Gruzia</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScheduleFootball;