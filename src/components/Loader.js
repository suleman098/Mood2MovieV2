import { useContext } from "react";
import { AppContext } from "../context/Appcontext";

function Loader() {
  const { mood, currentemojie } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-2xl mt-20 ">
          We're fetching the best movies to watch when you feel {currentemojie}{" "}
          {mood}... Hold tight!
        </p>
        <div className="loading loading-ring loading-lg text-secondary  w-24 h-24 mt-10 "></div>
      </div>
    </>
  );
}

export default Loader;
