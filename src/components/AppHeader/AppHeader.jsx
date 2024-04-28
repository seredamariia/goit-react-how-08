import { useAuth } from "../../hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <div>
        <div>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
