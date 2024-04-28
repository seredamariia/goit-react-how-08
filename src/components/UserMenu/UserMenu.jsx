import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { logOut } from "../../redux/auth/operations";
import style from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={style.userMenu}>
      <h3>Welcome, {user.name}</h3>
      <button
        className={style.btnLogOut}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserMenu;
