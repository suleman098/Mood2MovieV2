import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/Appcontext";
import useFetchData from "../hooks/useFetchData"; // Custom hook for fetching data
import MovieDetails from "../components/MovieDetails"; // Import your MovieDetails component
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SuggestedMovies = () => {
  const { genreID, error } = useContext(AppContext);
  const location = useLocation();
  const { data, loading } = useFetchData(
    genreID
      ? `https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}`
      : null
  );

  if (error) return <p>Error fetching movie details: {error}</p>;

  return (
    <div>
      <Navbar />
      {loading ? ( // Show local loading indicator
        <Loader />
      ) : (
        data && <MovieDetails movies={data.results} />
      )}

      <Footer />
    </div>
  );
};

export default SuggestedMovies;
