import React from "react";
import cardData from "../data/cardData.json"; // Assuming your JSON data is located in the data folder

const ReviewCards = () => {
  return (
    <>
      {cardData.review.map((review, index) => (
        <div className="review-card" key={review.id}>
          {/* Check if the index is even or odd to alternate image and text order */}
          {index % 2 === 0 ? (
            // Image first
            <>
              <img src={review.image} alt={review.altText} />
              <div className="review-text">
                <h4>{`${review.name} ${review.rating}`}</h4>
                <p>{review.comment}</p>
              </div>
            </>
          ) : (
            <>
              <div className="review-text">
                <h4>{`${review.name} ${review.rating}`}</h4>
                <p>{review.comment}</p>
              </div>
              <img src={review.image} alt={review.altText} />
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default ReviewCards;
