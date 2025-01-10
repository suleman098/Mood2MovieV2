import React from "react";
import { Route, Routes } from "react-router-dom";
import Genrebuttons from "../components/Genrebuttons";
import SuggestedMovies from "../pages/SuggestedMovies";
import Main from "../pages/Main";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/suggestedmovies/:mood" element={<SuggestedMovies />} />
    </Routes>
  );
};

export default AppRoutes;
