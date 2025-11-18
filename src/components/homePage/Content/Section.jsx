import { useNavigate } from "react-router-dom";

const Section = ({ id, title, image, summary }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/article/${id}`);
    };

    return (
        <article className="bg-white overflow-hidden border-b border-gray-200 pb-4">
            {/* Title clickable */}
            <h3
                onClick={handleClick}
                className="font-semibold text-lg text-gray-800 leading-tight text-left mb-2 cursor-pointer
                           hover:text-gray-400 transition-colors duration-200"
            >
                {title}
            </h3>

            <div className="flex items-start space-x-4">
                {/* Image clickable */}
                {image && (
                    <img
                        onClick={handleClick}
                        src={image}
                        alt={title}
                        className="w-48 h-32 object-cover flex-shrink-0 cursor-pointer"
                    />
                )}

                <div>
                    {/* Summary clickable */}
                    {summary && (
                        <p
                            onClick={handleClick}
                            className="mt-0 text-sm text-gray-900 text-left cursor-pointer"
                        >
                            {summary}
                        </p>
                    )}
                </div>
            </div>
        </article>
    );
};

export default Section;
