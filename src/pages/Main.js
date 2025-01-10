import Footer from "../components/Footer";
import Genrebuttons from "../components/Genrebuttons";
import HeadLine from "../components/HeadLine";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function Main() {
  return (
    <div className="bg-[#000033]">
      <Navbar />
      <HeadLine />
      <Genrebuttons />
      <Footer />
    </div>
  );
}

export default Main;
