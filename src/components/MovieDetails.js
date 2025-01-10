import React, { useState } from "react";
import MovieTrailer from "./MovieTrailer"; // Import the MovieTrailer component
import Button from "../components/Button";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext";

function MovieDetails({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { genreEmojis } = useContext(AppContext);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length); // Wrap around to the first movie
  };

  const handleBack = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + movies.length) % movies.length // Wrap around to the last movie
    );
  };

  if (!movies || movies.length === 0) {
    return <p>No movies available</p>;
  }

  const currentMovie = movies[currentIndex];

  const genreDetails = currentMovie.genre_ids
    .map((id) => genreEmojis[id])
    .filter(Boolean);

  return (
    <>
      {currentMovie && (
        <div className="flex flex-col items-center">
          {console.log(currentMovie)}
          <div className="mt-12">
            <MovieTrailer movieId={currentMovie.id} />
          </div>
          <div className="card bg-[#16213a] shadow-md w-[800px] mt-2">
            <div className="items-center text-center p-4">
              <div className="card-actions">
                <div className="stat text-left">
                  {" "}
                  {/* Align text to the left */}
                  <div className="font-bold text-3xl text-white mb-3">
                    {currentMovie.title} {/* Make title bold and white */}
                  </div>
                  <div className="text-white text-4xl"></div>
                  <div className="stat-desc text-white text-2xl">
                    {currentMovie.release_date.split("-")[0]} -{" "}
                    {currentMovie.vote_average.toFixed(1)}/10 ⭐ <br />
                    {genreDetails.length > 0
                      ? genreDetails.map((genre) => (
                          <p
                            key={genre.mood}
                            className="badge badge-primary badge-outline whitespace-nowrap nunito mr-4"
                          >
                            {genre.mood}
                          </p>
                        ))
                      : "N/A"}
                  </div>
                  <h3 className="font-bold text-2xl text-white mb-1 mt-5">
                    Overview
                  </h3>{" "}
                  <p className="opacity-75 h-16 md:h-20 overflow-auto text-sm md:text-base">
                    {currentMovie.overview}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between px-4 py-2 w-full">
              <Button
                onClick={handleBack}
                className="btn btn-secondary"
                disabled={movies.length <= 1}
              >
                ⬅️ Back
              </Button>
              <Button
                onClick={handleNext}
                className="btn btn-secondary"
                disabled={movies.length <= 1}
              >
                Next ➡️
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
