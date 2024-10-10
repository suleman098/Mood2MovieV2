import React, { useContext } from "react";
import { AppContext } from "../context/Appcontext";
import useFetchData from "../hooks/useFetchData";

const MovieTrailer = ({ movieId }) => {
  const { error, API_KEY } = useContext(AppContext);

  // Fetch trailer data using the custom hook
  const { data } = useFetchData(
    movieId
      ? `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
      : null
  );

  // Find the trailer key from the fetched data
  const trailerKey =
    data?.results?.find((video) => video.type === "Trailer")?.key || null;

  // Handle error state
  if (error) return <p>Error fetching trailer: {error}</p>;

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
        className="rounded-lg w-[800px] h-[400px]"
      />
    </div>
  );
};

export default MovieTrailer;
