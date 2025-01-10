import useFetchData from "../hooks/useFetchData"; // Same custom hook
import { AppContext } from "../context/Appcontext";
import { useContext } from "react";
import { useEffect } from "react";
import ButtonTable from "./Buttontable";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import HeadLine from "./HeadLine";
import Footer from "./Footer";

function Genrebuttons() {
  const {
    accessToken,
    setGenres,
    genreEmojis,
    setGenreID,
    setMood,
    setcurrentEmojie,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const { data } = useFetchData(
    "https://api.themoviedb.org/3/genre/movie/list",
    accessToken
  );

  useEffect(() => {
    if (data) {
      setGenres(data.genres); // Only update state when data is available
    }
  }, [data, setGenres]);

  const handleGenreClick = (genreID, currentmood, currentEmojie) => {
    setGenreID(genreID); // Set the genre ID in context
    setMood(currentmood); // Optionally set the mood if needed
    setcurrentEmojie(currentEmojie);

    navigate(`/suggestedmovies/${currentmood}`); // Navigate to /movies/{mood}
  };

  return (
    <>
      {data && (
        <ButtonTable
          genres={data.genres}
          onGenreClick={handleGenreClick}
          genreEmojis={genreEmojis}
        />
      )}
    </>
  );
}

export default Genrebuttons;
