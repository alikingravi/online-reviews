import React from "react";
import { FaStar } from "react-icons/fa";

export const StarRatingDisplay = (props) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input type="radio" name="rating" value={ratingValue} />
            <FaStar
              key={i}
              className="star-display"
              color={ratingValue <= props.userRating ? "#ffc107" : "#e4e5e9"}
              size={30}
            />
          </label>
        );
      })}
    </div>
  );
};
