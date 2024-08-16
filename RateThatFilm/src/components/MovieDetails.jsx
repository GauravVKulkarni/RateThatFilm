import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  const [yourRating, setYourRating] = useState(movie.your_rating || "");
  const [yourReview, setYourReview] = useState(movie.your_review || "");
  const navigate = useNavigate();

  const handleRatingChange = (e) => {
    setYourRating(e.target.value);
  };

  const handleReviewChange = (e) => {
    setYourReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update your_rating and your_review in state or database
    alert("Review submitted!");
    navigate("/"); // Navigate back to the movie list after submission
  };

  return (
    <div style={styles.container}>
      <img src={movie.image_url} alt={movie.title} style={styles.image} />
      <div style={styles.info}>
        <h1>{movie.title} ({movie.year})</h1>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>IMDb Rating:</strong> {movie.rating}</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>
            <strong>Your Rating:</strong>
            <input
              type="number"
              value={yourRating}
              onChange={handleRatingChange}
              min="0"
              max="10"
              style={styles.input}
            />
          </label>
          <label>
            <strong>Your Review:</strong>
            <textarea
              value={yourReview}
              onChange={handleReviewChange}
              style={styles.textarea}
            />
          </label>
          <button type="submit" style={styles.button}>Submit Review</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  image: {
    width: "400px",
    height: "600px",
    objectFit: "cover",
    marginRight: "20px",
  },
  info: {
    maxWidth: "500px",
  },
  form: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    width: "50px",
    padding: "5px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  }
};

export default MovieDetails;