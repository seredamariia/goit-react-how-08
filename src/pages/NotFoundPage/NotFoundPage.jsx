import { Link, useLocation } from "react-router-dom";
import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <>
      <section>
        <div className={style.container}>
          <h1>404</h1>
          <h2>Not found</h2>
          <p>The resource requested could not be found on this server.</p>
          <Link to={backLinkHref}>
            <button className={style.notFoundBtn}>
              Return to the homepage
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
