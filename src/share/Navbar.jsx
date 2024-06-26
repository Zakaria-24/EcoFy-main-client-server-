import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="navbar bg-sky-100  pt-2 px-24 ">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <Link to="/">
            <img
              className="w-auto h-7"
              src="https://i.ibb.co/KDG6hxK/EcoFy.png"
              alt="Logo"
            />
          </Link>
          <Link to="/" className=" text-2xl font-extrabold">
            EcoFy
          </Link>
        </div>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal">
          <div className=" hidden md:flex ">
          <li className="hover:text-[#44ced5] border-2 border-[#44ced5] mr-2 rounded-lg">
            <label id="theme" className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                // id="theme"
                type="checkbox"
                onChange={handleThemeToggle}
                checked={theme === "light" ? false : true}
              />

              <Tooltip
                anchorId="theme"
                place="left"
                // variant="info"
                content="Dark/Light Theme"
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </li>
          <li className="hover:text-[#44ced5] border-2 border-[#44ced5] mr-1 rounded-lg text-xl font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#44ced5] border-2 text-xl border-[#44ced5] rounded-lg mr-1 font-bold hover:bg-base-300 block text-center">
            <Link to="/AllQueries">All Queries</Link>
          </li>
          </div>

          {!user && (
            <>
              <li>
                <Link
                  to="/login"
                  className="bg-[#44ced5] text-xl border-2 border-[#44ced5] hover:bg-base-300 block text-center font-bold"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#fbffff] rounded-box w-52"
            >
 <li className=" sm:hidden hover:text-[#44ced5] border-2 border-[#44ced5] mb-1 mr-1 rounded-lg text-xl font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className=" sm:hidden hover:text-[#44ced5] border-2 text-xl border-[#44ced5] rounded-lg mb-1 mr-1 font-bold hover:bg-base-300 block text-center">
            <Link to="/AllQueries">All Queries</Link>
          </li>
              
              <li className="hover:bg-[#9AD0D3] hover:text-black border-2 mb-1 border-[#44ced5] font-bold rounded-lg">
                <Link to="/MyQueries">My Queries</Link>
              </li>

              <li className="hover:bg-[#9AD0D3] hover:text-black border-2 mb-1 border-[#44ced5] font-bold rounded-lg">
                <Link to="/MyRecommendation">My Recommendation</Link>
              </li>
              <li className="hover:bg-[#9AD0D3] hover:text-black border-2 mb-1 border-[#44ced5] font-bold rounded-lg">
                <Link to="/RecommendationForMe" className="justify-between">
                  Recommendation For Me
                </Link>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/login"
                  onClick={logOut}
                  className="bg-[#44ced5] text-xl border-2 border-[#44ced5] font-bold block text-center hover:bg-base-300"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
