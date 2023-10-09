import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white bg-opacity-30 py-5 px-16 flex items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <NavLink className={({isActive}) => isActive? "rounded-lg px-3 py-2 bg-gray-900 text-white" : "rounded-lg px-3 py-2 text-blue-500"}to="/">Home</NavLink>
            </li>
            <li>
            <NavLink className={({isActive}) => isActive? "rounded-lg px-3 py-2 bg-gray-900 text-white" : "rounded-lg px-3 py-2 text-slate-100 font"} to="/about">About</NavLink>
            </li>
            </ul>
          </div>
          <img src="/src/assets/logo_bg_removed.png" className="w-2/5" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex lg:items-center">
          <ul className="flex space-x-6 px-1">
            <li>
              <NavLink className={({isActive}) => isActive? "rounded-lg px-3 py-2 bg-gray-900 text-white" : "rounded-lg px-3 py-2 text-slate-100"}to="/">Home</NavLink>
            </li>
            <li>
            <NavLink className={({isActive}) => isActive? "rounded-lg px-3 py-2 bg-gray-900 text-white" : "rounded-lg px-3 py-2 text-slate-100 font"} to="/about">About</NavLink>
            </li>
            <li>
            <NavLink className={({isActive}) => isActive? "rounded-lg px-3 py-2 bg-gray-900 text-white" : "rounded-lg px-3 py-2 text-slate-100 font"} to="/contact-us">Contact Us</NavLink>
            </li>
            <li>
            <NavLink className={({isActive}) => isActive? "rounded-lg px-3 py-2 bg-gray-900 text-white" : "rounded-lg px-3 py-2 text-slate-100 font"} to="/blogs">Blogs</NavLink>
            </li>
            <li>
            <NavLink className={({isActive}) => isActive? "rounded-lg px-3 py-2 bg-gray-900 text-white" : "rounded-lg px-3 py-2 text-slate-100 font"} to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            <Link className="rounded-lg px-4 py-1 border-2 border-purple-950 font-semibold text-purple-200" to="/login">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
