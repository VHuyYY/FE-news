import React from 'react';
import Slider from 'react-slick';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

// -------------------------------------------------------------
// MOCK COMPONENTS - Giải quyết lỗi import `./ArticleCards`
// -------------------------------------------------------------

// SubSectionCard là một mock component đơn giản để thay thế `./ArticleCards`
const SubSectionCard = ({ image, title }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
        <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover"
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/200x150/e0e0e0/000000?text=Image+Error";
            }}
        />
        <div className="p-3">
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-3 min-h-[60px]">{title}</h3>
        </div>
    </div>
);

// MOCK CSS - Trong môi trường đơn file, ta cần mô phỏng lại CSS của slick-carousel
// Bằng cách sử dụng các lớp Tailwind được thiết kế để không xung đột.
// Mặc dù ta không thể import file .css, nhưng code logic vẫn chạy.

// -------------------------------------------------------------
// SLIDER COMPONENT LOGIC
// -------------------------------------------------------------

// Custom Arrow Components for the Slider
const PrevArrow = ({ onClick }) => (
    <div
        className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-30 cursor-pointer p-2 rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-100 hidden md:block"
        onClick={onClick}
        style={{ left: '-20px' }}
    >
        <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-30 cursor-pointer p-2 rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-100 hidden md:block"
        onClick={onClick}
        style={{ right: '-20px' }}
    >
        <ChevronRightIcon className="h-5 w-5 text-gray-700" />
    </div>
);

// Dữ liệu giả định
const articles = [
    {
        image: "https://placehold.co/200x150/505050/ffffff?text=AI",
        title: "'Muốn phát triển AI, phải tạo ra thị trường cho AI'",
    },
    {
        image: "https://placehold.co/200x150/505050/ffffff?text=Hai+Phong",
        title: "'Hải Phòng có thể trở thành trung tâm công nghệ hàng đầu của Đông Nam Á'",
    },
    {
        image: "https://placehold.co/200x150/505050/ffffff?text=The+He",
        title: "'Thế hệ trước hy sinh để mở đường, thế hệ hôm nay phải phụng sự để tới đích'",
    },
    {
        image: "https://placehold.co/200x150/505050/ffffff?text=Cong+Nghe",
        title: "Khai mạc Hội nghị thượng đỉnh về công nghệ số tại Hà Nội",
    },
    {
        image: "https://placehold.co/200x150/505050/ffffff?text=Doi+Moi",
        title: "Thúc đẩy đổi mới sáng tạo trong nông nghiệp công nghệ cao",
    },
    {
        image: "https://placehold.co/200x150/505050/ffffff?text=Du+Lich",
        title: "Ứng dụng AI để nâng cao trải nghiệm du lịch thông minh",
    }
];

const SubSection = () => {
    const hasEnoughArticles = articles.length > 4;

    const settings = {
        dots: false,
        // Dùng `React.useMemo` nếu logic phức tạp hơn, nhưng ở đây dùng trực tiếp `hasEnoughArticles`
        // cho cả `infinite` và `arrows`
        infinite: hasEnoughArticles,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: hasEnoughArticles,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // CHÚ Ý: Mặc dù đã cố gắng fix, nhưng do các file CSS của slick-carousel không được load,
        // giao diện có thể vẫn chưa đúng 100%. Hãy đảm bảo bạn import CSS trong môi trường thực.
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: articles.length > 3,
                    arrows: articles.length > 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: articles.length > 2,
                    arrows: articles.length > 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: articles.length > 1,
                    arrows: articles.length > 1,
                }
            }
        ]
    };

    return (
        <div className="p-4 bg-[#FCFAF6] border-b border-[#F0ECDF] border-t">
            <div className="flex items-start gap-4 py-2 max-w-7xl mx-auto">
                {/* LEFT: Section Title */}
                <div className="flex-none min-w-[120px] text-[18px] mr-2">
                    <div className="flex flex-col font-serif font-bold text-[#454238]">
                        <span>Hoạt động</span>
                        <span>Bộ KH&CN</span>
                        <span className="text-sm font-normal pt-1">(S.T.LĐ)</span>
                    </div>
                </div>

                {/* RIGHT: Slider with Article Cards */}
                <div className="flex-grow relative w-full overflow-hidden">
                    {articles.length > 0 ? (
                        <div className="w-full">
                            {/* Bọc Slider để đảm bảo hiển thị đúng cấu trúc */}
                            <Slider {...settings}>
                                {articles.map((article, index) => (
                                    <div key={index} className="px-2">
                                        <SubSectionCard image={article.image} title={article.title} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    ) : (
                        <div className="text-gray-500 italic text-center">Không có bài viết nào để hiển thị.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubSection;