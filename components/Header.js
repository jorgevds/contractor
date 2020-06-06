import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.appName}>
          <Link href="/">
            <a>Contractor</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/workings">
            <a>Hoe werkt het</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
