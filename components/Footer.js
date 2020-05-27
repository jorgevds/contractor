import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
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
        <li className={styles.legalDisclaimer}>
          All rights reserved, famalamily
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
