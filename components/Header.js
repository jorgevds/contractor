import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <li className={styles.appName}>
          <Link href="/index">
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
            <a>How it works</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
