import { useNavigate, useLocation } from "react-router-dom";
import Button from "../components/Button";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext";
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mood, currentemojie } = useContext(AppContext);
  function handelClick() {
    navigate("/");
  }

  const isHomePath = location.pathname === "/";

  return (
    <div className="flex rounded justify-center">
      <div className=" navbar w-1/2 h-20 bg-[#000066] rounded-3xl mt-5 mb-12 ">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <div>
            {isHomePath && <p className="btn btn-ghost text-3xl">Mood2Movie</p>}
            {!isHomePath && (
              <p className="btn btn-ghost text-xl">
                Feeling {currentemojie} {mood}{" "}
              </p>
            )}
          </div>
        </div>
        <div className="navbar-end">
          {!isHomePath && (
            <Button
              className="btn btn-neutral rounded-3xl  "
              onClick={handelClick}
            >
              Edit Mood..
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
