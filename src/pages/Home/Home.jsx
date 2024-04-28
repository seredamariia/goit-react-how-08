import { NavLink } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section>
        <div className={style.container}>
          <h1 className={style.title}>Phonebook</h1>
          <NavLink className={style.btnContacts} to="/contacts">
            Go to contacts
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Home;
