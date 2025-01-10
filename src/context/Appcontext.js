import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// Create the context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [genre, setGenres] = useState(null);
  const [mood, setMood] = useState(null);
  const [TrailerNotAvaliable, setTrailerNotAvaliable] = useState(false);
  const [genreID, setGenreID] = useState(() => {
    return localStorage.getItem("genreID") || null;
  });

  const [currentemojie, setcurrentEmojie] = useState(null);

  const API_KEY = "9df75407b86477b44444cd6cd3c737bb";
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGY3NTQwN2I4NjQ3N2I0NDQ0NGNkNmNkM2M3MzdiYiIsIm5iZiI6MTcyODMxMDQ5MC4yMTgxMjgsInN1YiI6IjY2OTE4NmU5NmY1NGYyNjAxMDQzZGQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NTM9ZMSvJEq45-_7W50mJ5yBoejtPYsQM4rgzYAs29A";

  const genreEmojis = {
    28: { emoji: "🤪", mood: "Thrill-seeking" }, // Action
    12: { emoji: "😎", mood: "Adventurous" }, // Adventure
    16: { emoji: "🎨", mood: "Creative" }, // Animation
    35: { emoji: "😂", mood: "Humorous" }, // Comedy
    80: { emoji: "🕵️‍♂️", mood: "Mysterious" }, // Crime
    99: { emoji: "🎥", mood: "Documentary" }, // Documentary
    18: { emoji: "🎭", mood: "Thoughtful" }, // Drama
    10751: { emoji: "👪", mood: "Family-time" }, // Family
    14: { emoji: "✨", mood: "Magical" }, // Fantasy
    36: { emoji: "📚", mood: "Reflective" }, // History
    27: { emoji: "👻", mood: "Gloomy" }, // Horror
    10402: { emoji: "🎶", mood: "Joyful" }, // Music
    9648: { emoji: "🔍", mood: "Mysterious" }, // Mystery
    10749: { emoji: "❤️", mood: "Romantic" }, // Romance
    878: { emoji: "🚀", mood: "Exciting" }, // Science Fiction
    10770: { emoji: "📺", mood: "Nostalgic" }, // TV Movie
    53: { emoji: "😱", mood: "Thrilling" }, // Thriller
    10752: { emoji: "⚔️", mood: "Intense" }, // War
    37: { emoji: "🐎", mood: "Nostalgic" }, // Western
  };

  useEffect(() => {
    if (genreID) {
      localStorage.setItem("genreID", genreID);
    }
  }, [genreID]);

  return (
    <AppContext.Provider
      value={{
        accessToken,
        loading,
        setLoading,
        genreID,
        setGenreID,
        error,
        setError,
        setGenres,
        genre,
        genreEmojis,
        mood,
        setMood,
        API_KEY,
        TrailerNotAvaliable,
        setTrailerNotAvaliable,
        currentemojie,
        setcurrentEmojie,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
