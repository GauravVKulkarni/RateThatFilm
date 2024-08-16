// // import React from 'react';
// import { useParams } from 'react-router-dom';
// import './MovieDetails.css';

// const MovieDetails = () => {
//   const { movieId } = useParams();

//   const movie = {
//     id: movieId,
//     title: "Movie Title",
//     description: "This is a detailed description of the movie.",
//     releaseDate: "2024-01-01",
//     rating: "8.5/10",
//     poster: "https://via.placeholder.com/150"
//   };

//   return (
//     <div className="movie-details">
//       <h2>{movie.title}</h2>
//       <img src={movie.poster} alt={movie.title} className="movie-poster" />
//       <p><strong>Description:</strong> {movie.description}</p>
//       <p><strong>Release Date:</strong> {movie.releaseDate}</p>
//       <p><strong>Rating:</strong> {movie.rating}</p>
//     </div>
//   );
// };

// export default MovieDetails;