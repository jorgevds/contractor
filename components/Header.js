import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.appName}>Contractor</li>
        <li>
          <Link href="../pages/about.js">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="../pages/workings.js">
            <a>How it works</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
