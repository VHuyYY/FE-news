import React from 'react';

const Sidebars = () => {
    return (
        <aside className="space-y-6">
            {/* Newsletter Signup */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-semibold text-blue-600">VnExpress Newsletters</span>
                    <img src="https://via.placeholder.com/20" alt="Icon" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Đừng bỏ lỡ tin tức quan trọng!</h3>
                <p className="text-sm text-gray-600 mt-2">
                    Nhận tóm tắt tin tức nổi bật, hấp dẫn nhất 24 giờ qua trên VnExpress.
                </p>
                <div className="mt-4">
                    <input
                        type="email"
                        placeholder="Địa chỉ Email..."
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="w-full mt-2 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700">
                        Đăng ký
                    </button>
                </div>
                <div className="flex items-center my-4">
                    <hr className="flex-1 border-gray-300" />
                    <span className="mx-2 text-xs text-gray-500">Hoặc</span>
                    <hr className="flex-1 border-gray-300" />
                </div>
                <div className="flex justify-center space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                        <span className="text-blue-600 text-sm">G</span>
                        <span className="text-gray-700 text-sm">Google</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                        <span className="text-blue-600 text-sm">f</span>
                        <span className="text-gray-700 text-sm">Facebook</span>
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                    *Khi đăng ký, bạn đồng ý với điều khoản của VnExpress.
                </p>
            </div>

            {/* Ads Section */}
            <div className="space-y-4">
                {/* Ad 1 */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img src="https://static.eclick.vn/uploads/5x3/2025/03/19/67daf3390ab76.png" alt="Ad 1" className="w-full " />
                    <h4 className="mt-2 text-lg font-semibold text-gray-800">Với chỉ 60 phút ôn luyện mỗi ngày, con có thể đạt 1500 điểm SAT</h4>
                    <p className="text-base text-gray-600 mt-1">Ebook là chìa khoá luyện hiệu quả, giúp con dễ dàng chinh phục kỳ thi SAT sau 3-4 tháng.</p>
                </div>

                {/* Ad 2 */}
                <div className="bg-white p-4 rounded-lg shadow-sm">

                    <div className="flex items-start space-x-4">
                        <img src="https://static.eclick.vn/uploads/5x3/2025/10/10/68e8c119c1ba7.png" alt="Ad 2" className="w-30 h-16 object-cover " />
                        <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-800">Thực phẩm Vương Rào có bán tại các nhà thuốc trên toàn quốc</h4>
                            <p className="text-xs text-gray-600 mt-1">
                                Dành cho nam giới chú ý, ưu tiên tuyến tiền liệt, hoặc có những ưu, nhược điểm...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebars;