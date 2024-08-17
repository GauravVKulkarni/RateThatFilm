import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import moviesData from "./assets/data/movies.json";
import "./styles/Footer.css";

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />
        <div style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<MovieList movies={moviesData} />} />
            <Route path="/movie/:id" element={<MovieDetails movies={moviesData} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainContent: {
    padding: "20px",
  },
};

export default App;