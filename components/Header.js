import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.appName}>
            <Link href="/">
              <a>Contractor</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Over ons</a>
            </Link>
          </li>
          <li>
            <Link href="/workings">
              <a>Hoe werkt het</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>Ons team</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
