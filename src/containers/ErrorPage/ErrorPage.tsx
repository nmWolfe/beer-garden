import { Link } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <p className="error-page__404">Error 404</p>
      <p className="error-page__paragraph">
        Page not found.. This Beer must have gone for a walk about..
      </p>
      <Link to={"/"} className="error-page__link">
        Back to the Beers
      </Link>
    </div>
  );
};

export default ErrorPage;
