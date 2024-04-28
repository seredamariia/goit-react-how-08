import { NavLink, useLocation } from "react-router-dom";
import style from "./AuthNav.module.css";

const AuthNav = () => {
  const location = useLocation();
  const getMenuItemClass = (to) => {
    return to === location.pathname;
  };
  return (
    <div className={style.menu}>
      <NavLink className={getMenuItemClass("/register")} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={getMenuItemClass("/login")} to="/login">
        Sign In
      </NavLink>
    </div>
  );
};

export default AuthNav;
