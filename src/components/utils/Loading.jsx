import { MdOutlineNewspaper } from "react-icons/md";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
      
      {/* Icon báo */}
      <MdOutlineNewspaper className="text-gray-700 text-5xl animate-pulse mb-4" />

      {/* Text */}
      <p className="text-gray-600 text-lg font-medium">
        Đang tải bài viết...
      </p>

      {/* Dấu chấm nhấp nháy */}
      <div className="flex gap-1 mt-2">
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-300"></span>
      </div>
    </div>
  );
};

export default Loading;
