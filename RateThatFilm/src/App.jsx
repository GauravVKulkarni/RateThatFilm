import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from "./components/MovieList";
import moviesData from "./assets/Data/movies.json";


function App() {
  return (
    <>
      <Header />
      <main>
       <MovieList movies={moviesData} />
      </main>
      <Footer />
    </>
  );
}

export default App;