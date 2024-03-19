import { Link } from "react-router-dom";
import NewsletterForm from "./newsLetterForm";
import classes from "./mainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={"events"}>Events</Link>
          </li>
          <li>
            <Link to={"newsletter"}>Newsletter</Link>
          </li>
        </ul>
      </nav>
      <NewsletterForm />
    </header>
  );
}

export default MainNavigation;
