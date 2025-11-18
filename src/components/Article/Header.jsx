import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <div className="font-bold text-lg text-blue-600">
                        <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v9715/v2_2019/pc/graphics/logo.svg" alt="" className="w-50 h-auto"/>
                    </div>
                    <nav className="hidden lg:flex space-x-4 text-gray-700">
                        <a href="#" className="hover:text-blue-600">Chính trị</a>
                        <a href="#" className="hover:text-blue-600">Đại hội Đảng bộ các cấp nhiệm kỳ 2025-2030</a>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-500">
                        Thứ tư, 13/10/2025, 11:37 (GMT+7)
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;