import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({ rating, className = "text-primary text-md" }) {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {rating >= star ? (
            <FaStar className={className} />
          ) : rating >= star - 0.5 ? (
            <FaStarHalfAlt className={className} />
          ) : (
            <FaRegStar className={className} />
          )}
        </span>
      ))}
    </div>
  );
}

export { StarRating };
