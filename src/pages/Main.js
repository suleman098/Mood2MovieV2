import Footer from "../components/Footer";
import Genrebuttons from "../components/Genrebuttons";
import HeadLine from "../components/HeadLine";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <HeadLine />
      <Genrebuttons />
      <Footer />
    </div>
  );
}

export default Main;
