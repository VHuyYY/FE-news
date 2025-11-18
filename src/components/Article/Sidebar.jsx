import React from 'react';

const Sidebar = ({ isSticky = false }) => {
    const popularNews = [
        {
            image: "https://i1-kinhdoanh.vnecdn.net/2025/10/11/wall-street-reu-1-1760142441-1-7351-3153-1760142519.jpg?w=300&h=180&q=100&dpr=2&fit=crop&s=8za2DswZp-uLhTSRsT4iBQ",
            title: "Vàng lặng, chứng khoán Mỹ bán tháo vì căng thẳng Mỹ - Trung",
            comments: 49,
        },
        {
            image: "https://i1-kinhdoanh.vnecdn.net/2025/10/11/chip-H20-1760157921-1632-1760158130.jpg?w=300&h=180&q=100&dpr=2&fit=crop&s=ZsucY2u0-0UE7QnjwZJ-Hw",
            title: "Nvidia mắc kẹt trong căng thẳng thương mại Mỹ - Trung",
            comments: 29,
        },
        {
            image: "https://i1-kinhdoanh.vnecdn.net/2025/10/12/rare-1749621058-3975-174962188-8554-3326-1760237352.jpg?w=300&h=180&q=100&dpr=2&fit=crop&s=Q4IfVSGa1VNXbi-bqolPPg",
            title: "Đất hiếm - nguồn cơn khiêu chiến Trung tăng thuế với Trung Quốc",
            comments: 163,
        },
        {
            image: "https://i1-kinhdoanh.vnecdn.net/2025/10/11/ngap-1760149485-5308-1760149514.jpg?w=300&h=180&q=100&dpr=2&fit=crop&s=h01iW_AIHbszlTGB29Ekuw",
            title: "Hàng nghìn xe hư hỏng, do bão số 10, 11",
            comments: 82,
        },
        // {
        //     image: "https://i1-kinhdoanh.vnecdn.net/2025/10/12/uschinaflag-1760238553-3121-1760238562.jpg?w=300&h=180&q=100&dpr=2&fit=crop&s=1CRYVD7WM7HcqqLi30lEMQ",
        //     title: "Trung Quốc buộc Mỹ 'tiêu chuẩn kép' khi năng thuế",
        //     comments: 121,
        // },
    ];
    const sidebarClasses = `
        p-6
        ${isSticky ? 'lg:sticky lg:top-23' : ''}
    `;
    return (
        <aside  className={sidebarClasses}>
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Xem nhiều</h2>
            <ul className="space-y-4">
            {popularNews.map((item, index) => (
                    <li key={index} className="flex items-start space-x-4 border-b border-gray-300 pb-4">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-30 h-20 object-cover "
                        />
                        <div className="flex-1">
                            <a href="#" className="block text-base text-gray-700 hover:text-blue-600 font-semibold leading-tight">
                                {item.title}
                            </a>
                            <div className="text-xs text-gray-500 mt-1 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10c0 3.866-3.582 7-8 7s-8-3.134-8-7c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.5 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        d="M9.695 10.435A5.5 5.5 0 007.5 13a2.5 2.5 0 010-5A5.5 5.5 0 009.695 10.435z"
                                        fill="#3B82F6"
                                    />
                                </svg>
                                <span className="text-blue-600 text-xs">{item.comments}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;