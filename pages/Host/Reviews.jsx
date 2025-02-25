import React from "react";
import reviewsGraph from "../../pictures/reviews-graph.png";
import { BsStarFill } from "react-icons/bs";

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];

  const reviewEls = reviewsData.map((review) => (
    <div className="review" key={review.id}>
      {[...Array(review.rating)].map((__, i) => (
        <BsStarFill className="review-star" key={i} />
      ))}
      <div className="info-div">
        <p>{review.name}</p>
        <p className="review-date">{review.date}</p>
      </div>
      <p className="review-text">{review.text}</p>
    </div>
  ));

  return (
    <section className="reviews-host">
      <div className="info">
        <h2>Your Reviews</h2>
        <p>
          last <span>30 days</span>
        </p>
      </div>
      <img src={reviewsGraph} alt="Ratings graph" />
      <h3>Reviews (2)</h3>
      <div className="reviews">{reviewEls}</div>
    </section>
  );
}
