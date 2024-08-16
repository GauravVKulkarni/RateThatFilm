const MovieList = ({ movies }) => {
  return (
    <div style={styles.movieList}>
      {movies.map((movie) => (
        <div key={movie.id} style={styles.card}>
          <img src={movie.image_url} alt={movie.title} style={styles.image} />
          <div style={styles.info}>
            <h2>{movie.title} ({movie.year})</h2>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>IMDb Rating:</strong> {movie.rating}</p>
            <p><strong>Your Rating:</strong> {movie.your_rating || "Not rated yet"}</p>
            <p><strong>Your Review:</strong> {movie.your_review || "No review yet"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Sample inline styles for the components
const styles = {
  movieList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
  },
  info: {
    padding: "15px",
  }
};

export default MovieList;