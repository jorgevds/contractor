import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
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
        <li className={styles.legalDisclaimer}>
          All rights reserved, famalamily
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
