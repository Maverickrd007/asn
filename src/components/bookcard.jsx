import React from "react";

const BookCard = ({ title, author, coverImage, description }) => {
  return (
    <div className="book-card">
      <img src={coverImage} alt={title} className="book-cover" />
      <h2>{title}</h2>
      <h4>by {author}</h4>
      <p>{description}</p>
    </div>
  );
};

export default BookCard;
