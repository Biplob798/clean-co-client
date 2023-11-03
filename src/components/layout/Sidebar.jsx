import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 font-bold ">
        {/* Navbar menu content here */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "btn btn-primary btn-sm" : "btn btn-ghost"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "btn btn-primary btn-sm" : "btn btn-ghost"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "btn btn-primary btn-sm" : "btn btn-ghost"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "btn btn-primary btn-sm" : "btn btn-ghost "
          }
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
