import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter movies based on the search term
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Movie List</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />

      <div style={styles.movieGrid}>
        {filteredMovies.map((movie) => (
          <div key={movie.id} style={styles.card}>
            <img src={movie.image_url} alt={movie.title} style={styles.image} />
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <p>Director: {movie.director}</p>
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
            <Link to={`/movie/${movie.id}`}>
              <button style={styles.button}>Review</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  searchBar: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    fontSize: "16px",
  },
  movieGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "0.8rem",
  },
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
  },
  button: {
    marginBottom: "1rem",
    padding: "10px 20px",
    fontSize: "0.8rem",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default MovieList;