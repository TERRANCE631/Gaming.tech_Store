// Import necessary React hooks and toastify
import React, { useState } from 'react';

export function Reviews() {
  const [rating, setRating] = useState(0); // State to hold the selected rating
  const [hover, setHover] = useState(0); // State to hold hover effect on stars
  const [review, setReview] = useState(""); // State to hold the review text
  const [alertMessage, setAlertMessage] = useState(""); // State to hold alert messages

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || review.trim() === "") {
      setAlertMessage("Please provide a rating and review.");
      return;
    };

    setAlertMessage(`Thank you for your feedback!\nRating: ${rating}\nReview: ${review}`); setRating(0);
    setHover(0);
    setReview("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Write a Review</h2>

      {alertMessage && (
        <div className="p-2 border border-yellow-400 text-yellow-700 rounded">
          {alertMessage}
        </div>
      )};

      {/* Star Rating Section */}
      <div className="flex items-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className={`w-8 h-8 cursor-pointer ${star <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.318l1.76 3.568 3.942.574-2.85 2.775.673 3.927L12 13.796l-3.525 1.866.673-3.927-2.85-2.775 3.942-.574L12 4.318z"
            />
          </svg>
        ))}
      </div>

      {/* Text Area for Review */}
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 mb-4"
          rows={1}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

