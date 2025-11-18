import React, { useEffect, useState } from 'react';

const NewsSection = () => {

    return (
        <div className="space-y-6">
            {/* Khối tin tức nổi bật trên cùng */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-4">
                {/* Hình ảnh chính (chiếm 2/3) */}
                <div className="md:col-span-2">
                    <img
                        src="https://i1-kinhdoanh.vnecdn.net/2025/10/09/xang39-1759991662-1759991673-9511-1759991728.jpg?w=680&h=408&q=100&dpr=2&fit=crop&s=YOaPRcUIlZ9fYObVWx81GA"
                        alt="Giá xăng dầu"
                        className="w-full h-auto object-cover "
                    />

                </div>

                {/* Tóm tắt tin tức (chiếm 1/3) */}
                <div className="md:col-span-1 pt-0">
                    <p className="font-semibold text-black text-2xl leading-tight text-left">
                        Giá xăng xuống dưới 20.000 đồng một lít
                    </p>
                    <p className="mt-2 text-base text-black  text-left">
                        Giá xăng, dầu giảm 430-570 đồng một lít,kg từ 15h hôm nay, sau điều chỉnh của liên Bộ Công
                        Thương - Tài chính.
                    </p>
                    <p className="mt-2 text-base text-black  text-left">
                        Giá xăng, dầu giảm 430-570 đồng một lít,kg từ 15h hôm nay, sau điều chỉnh của liên Bộ Công
                        Thương - Tài chính.
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-gray-500 text-sm">
                        <span>2h trước</span>
                        <span className="font-bold">Kinh doanh</span>
                        <span className="text-gray-300 ml-auto">|</span>
                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                                />
                            </svg>
                            <span>18</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-full h-px my-4 bg-gray-200 border-0"/>

            {/* Khối tin tức phụ bên dưới */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tin phụ 1 */}
                <article className="flex-1 bg-white  overflow-hidden flex flex-col">
                    <div className="p-2">
                        <h3 className="font-semibold text-gray-800 text-left text-[18px]">
                            Lũ sông miền Bắc đã qua đỉnh, chiều ngày thu hẹp
                        </h3>
                    </div>
                    <img
                        src="https://i1-vnexpress.vnecdn.net/2025/10/09/ngap2-1759992062-1759992141-9279-1759992155.jpg?w=300&h=180&q=100&dpr=2&fit=crop&s=Rl2qDqhgqTxjYbYoBc3qfQ"
                        alt="Lũ sông miền Bắc"
                        className="w-full h-auto object-cover mt-auto"
                    />
                </article>

                {/* Article 2 */}
                <article className="flex-1 bg-white  overflow-hidden flex flex-col text-left text-[18px] ">
                    <div className="p-2">
                        <h3 className="font-semibold text-gray-800">
                            Phó thủ tướng: Tư nhân sẽ đảm nhiều chức vụ quan trọng
                        </h3>
                    </div>
                    <img
                        src="https://i1-vnexpress.vnecdn.net/2025/10/09/gen-h-z7021600758271df4b4c2f7f-3228-3794-1759989337.jpg?w=300&h=180&q=100&dpr=2&fit=crop&s=rMmtUwcPV1vLcjlRbR9j7g"
                        alt="Phó thủ tướng"
                        className="w-full h-auto object-cover mt-auto"
                    />
                </article>


                {/* Tin phụ 3 */}
                <article className="bg-white  p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800">Góc nhìn</h3>
                        <span className="text-xs text-blue-500">22</span>
                    </div>
                    <h3 className="font-semibold text-black text-[18px] leading-tight text-left mt-1">
                        Sinh tồn trong lũ
                    </h3>
                    <p className="mt-2 text-base text-black  text-left">
                        Không quốc gia nào phản ứng hoàn hảo trước khủng hoảng, và các sáng kiến nhỏ của cộng đồng có
                        thể làm nên kỳ tích.
                    </p>
                </article>

            </div>
            <hr className="w-full h-px my-4 bg-gray-200 border-0"/>
        </div>
    )
        ;
};

export default NewsSection;