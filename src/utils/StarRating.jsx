import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {rating >= star ? (
            <FaStar className="text-primary text-md" />
          ) : rating >= star - 0.5 ? (
            <FaStarHalfAlt className="text-primary text-md" />
          ) : (
            <FaRegStar className="text-primary text-md" />
          )}
        </span>
      ))}
    </div>
  );
}

export { StarRating };
