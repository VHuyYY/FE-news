function AdBank(){
    return (
        <>
            <div className="space-y-4  ">
                <div className="text-left pb-2 mb-4 bg-gray-50 pl-3 ">
                    <span className="font-bold">Giá vàng thế giới </span>
                    <span className="ml-4 text-base text-gray-800"><span className="font-semibold">Mua:</span> 3.986,3 USD/ounce</span>
                    <span className="ml-4 text-base text-gray-800"><span className="font-semibold">Bán:</span> 3.988,3 USD/ounce</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {/* Cột 1: Doanh nghiệp vươn mình */}
                    <div className="bg-gray-50 p-3">
                        <div className="flex items-center space-x-3 text-base text-gray-500 mb-2 ml-3 ">
                            <span className="text-red-500 font-bold"><img src="https://s1.vnecdn.net/vnexpress/restruct/i/v9715/graphics/logo-mbbank.png" className="w-20 h-5" alt=""/></span>
                            <span>Chính sách</span>
                            <span>Câu chuyện</span>
                            <span>Đầu tư</span>
                        </div>
                        <div className="flex space-x-4">
                            <img
                                src="https://i1-vnexpress.vnecdn.net/2025/10/06/chuoi-kho-2-jpg-1759730181-175-3396-2689-1759730367.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=M5zzGQO29WAUFT-u3xOXAQ"
                                alt="9x chi hàng tỷ đồng" className="w-[100px] h-[60px] object-cover"/>
                            <h3 className="font-bold text-base leading-tight">9x chi hàng tỷ đồng giữ nghề làm chuối khô
                                trăm năm</h3>
                        </div>
                    </div>

                    {/* Cột 2: NetZero */}
                    <div className="bg-gray-50 p-3">
                        <div className="flex items-center space-x-3 text-base text-gray-500 mb-2 ml-3">
                            <span className="text-green-500 font-bold"><img src="https://s1.vnecdn.net/vnexpress/restruct/i/v9715/graphics/netzero.png" className="w-20 h-5" alt=""/></span>
                            <span>Cẩm nang</span>
                            <span>Doanh nghiệp xanh</span>
                        </div>
                        <div className="flex space-x-4">
                            <img
                                src="https://i1-kinhdoanh.vnecdn.net/2025/10/08/vie-t-nam-dang-du-ng-tru-o-c-c-9037-2762-1759905474.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=vGT1gcix5kJG2fj9f6fwbw"
                                alt="Trang trại điện mặt trời" className="w-[100px] h-[60px] object-cover"/>
                            <div className="flex-1">
                                <h3 className="font-bold text-base leading-tight">Trang trại lắp điện mặt trời có thể thu
                                    lợi nhuận một tỷ đồng mỗi ha</h3>
                                <div className="flex items-center text-sm text-gray-500 mt-2">
                                    <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.868.504l-2 3A1 1 0 008 12h4a1 1 0 00.868-1.496l-2-3A1 1 0 0010 7z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    <span>14</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdBank;