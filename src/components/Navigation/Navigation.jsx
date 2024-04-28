import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import style from "./Navigation.module.css";

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const getMenuItemClass = (to) => {
    return to === location.pathname;
  };
  return (
    <nav className={style.navigation}>
      <NavLink to="/" className={getMenuItemClass("/")}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getMenuItemClass("/contacts")}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
