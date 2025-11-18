import React from 'react';

const commentsData = [
    {
        name: 'Việt Thắng Vũ',
        avatar: 'https://a1.vnecdn.net/s6_96_5_91340195524459871480.png?w=60&h=60&s=Rl-Ru2vqhpNje_JcGvyCmw&v=1',
        text: 'Người lao động dường như tôi đây thì thấy cuộc sống chật vật khó khăn hơn 15 năm trước',
        likes: 3,
        replies: 15,
        time: '45 trước'
    },
    {
        name: 'Đức',
        avatar: 'https://a1.vnecdn.net/s6_96_5_91340195524459871480.png?w=60&h=60&s=Rl-Ru2vqhpNje_JcGvyCmw&v=2',
        text: 'Đức hi vọng với GPD bình quân 10% 1 năm trong giai đoạn tới thì toàn thể người dân sẽ cùng giàu lên và cũng được thừa hưởng thành quả sự tăng trưởng của đất nước chứ không phải chỉ là số ít % top người giàu là người thừa hưởng chính.',
        likes: 6,
        replies: 0,
        time: '39 trước'
    },
    {
        name: 'HT (king.pacific74)',
        avatar: 'https://a1.vnecdn.net/s91254733985747987945.jpg?w=60&h=60&s=mA0xOa1i0QfJKN5xn26B1w&v=1',
        text: 'Mong GDP tăng và cuộc sống người dân ngày càng khấm khá.',
        likes: 3,
        replies: 2,
        time: '42 trước'
    },
];

const tags = ['Tags: Việt Nam', 'GDP', 'Đại hội Đảng', 'Kinh tế Việt Nam', 'tăng trưởng kinh tế', 'thu nhập bình quân', 'GDP bình quân đầu người'];

const CommentsSection = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Ý kiến</h2>

            {/* Write your comment section */}
            <div className="mb-6">
                <textarea
                    className="w-full h-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Chia sẻ ý kiến của bạn..."
                />
                <div className="flex justify-end">
                    <button
                        className="px-2 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition"
                    >
                        Gửi bình luận
                    </button>
                </div>
            </div>

            {/* Popular comments section */}
            <div className="flex items-center space-x-4 mb-4 border-b pb-2">
                <span className="font-bold text-lg text-[#B42652]">Quan tâm nhất</span>
                <span className="text-gray-500 hover:text-gray-700 cursor-pointer font-bold">Mới nhất</span>
            </div>

            {/* List of comments */}
            <div className="space-y-6">
                {commentsData.map((comment, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <img src={comment.avatar} alt={comment.name} className="w-10 h-10 rounded-full" />
                        <div className="flex-1">
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold text-gray-800 text-md">{comment.name}</span>
                                <span className="text-xs text-gray-500">{comment.time}</span>
                            </div>
                            <p className="text-base text-gray-700 my-1">{comment.text}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <button className="flex items-center hover:text-blue-600">
                                    <span className="mr-1 text-sm">👍 Thích</span>
                                </button>
                                <span>{comment.likes}</span>
                                <button className="flex items-center hover:text-blue-600">
                                    <span className="mr-1 text-sm">💬 Trả lời</span>
                                </button>
                                <span>{comment.replies}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tags section */}
            <div className="mt-8 flex flex-wrap gap-2 text-sm text-gray-600">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 px-2 py-1 rounded-full">{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default CommentsSection;