import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../services/article/Article";
import Loading from "../utils/Loading";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";
import { useAuth } from "../../context/AuthContext";
import { addBookmarkForUser, checkBookmark, deleteBookmarkForUser } from "../../services/bookmark/Bookmark";

const MainContent = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [article, setArticle] = useState();

  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const cleanContent = (text) => {
    if (!text) return "";

    // Tìm vị trí chuỗi "Bình luận"
    const stopIndex = text.indexOf("Bình luận");

    if (stopIndex !== -1) {
      return text.substring(0, stopIndex).trim();
    }

    return text;
  };

  const handleGetArticle = async (id) => {
    const data = await getArticleById(id);
    data.content = cleanContent(data.content);
    setArticle(data);
  };

  useEffect(() => {
    if (!id) return;
    handleGetArticle(id);
  }, [id]);

  const handleCheckBookmark = async () => {
    if (!user || !article?._id?.$oid) return;

    const isSuccess = await checkBookmark(article._id.$oid);
    if (isSuccess) {
        setSaved(true);
    }
  };

  useEffect(() => {
    handleCheckBookmark();
  }, [user, article?._id?.$oid]);

  if (!article) {
    return <Loading />;
  }

  const handleToggleBookmark = async () => {
    if (loading || !article._id.$oid) return;
    setLoading(true);

    if(!saved){
        await addBookmarkForUser(article._id.$oid);
        setSaved(true);
    } else {
        await deleteBookmarkForUser(article._id.$oid);
        setSaved(false);
    }
    setLoading(false);
  }

  const paragraphs = article.content.split("\n\n");

  const renderContent = () => {
    return paragraphs.map((p, index) => {
      // Nếu chứa chữ Ảnh:
      if (p.toLowerCase().includes("ảnh")) {
        return (
          <div key={index} className="my-4">
            {/* Chèn hình trước đoạn text Ảnh */}
            <img
              src={article.images} // ảnh chính của bài
              alt="Ảnh mô tả"
              className="w-full rounded mb-2"
            />

            <p className="text-sm text-gray-500 italic">{p}</p>
          </div>
        );
      }

      // Nếu là đoạn text bình thường
      return (
        <p key={index} className="mb-3 leading-relaxed text-gray-900">
          {p}
        </p>
      );
    });
  };

  return (
    <main className="bg-[#FCFAF6] p-6 rounded-lg shadow-sm ">
      {/* Breadcrumb + Bookmark (Cùng hàng) */}
      <div className="flex items-center justify-between mb-2">
        {/* Breadcrumb bên trái */}
        <div className="text-base text-gray-500">
          {article.category_name}

          {article.category_child_name && (
            <>
              <span className="mx-1">&gt;</span>
              <span>{article.category_child_name}</span>
            </>
          )}
        </div>

        {/* Nút lưu bài */}
        {user && (
          <button
            onClick={handleToggleBookmark}
            disabled={loading}
            className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md
               hover:bg-gray-100 transition text-gray-700"
          >
            {saved ? (
              <BiSolidBookmark className="text-blue-600 text-xl" />
            ) : (
              <BiBookmark className="text-gray-600 text-xl" />
            )}
          </button>
        )}
      </div>

      <h1 className="text-4xl font-semibold  leading-tight mb-4">
        {article.title}
      </h1>
      <div className="prose max-w-none text-black text-xl">
        {renderContent()}
      </div>
    </main>
  );
};

export default MainContent;
