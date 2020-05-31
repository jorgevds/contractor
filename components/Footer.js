import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <div>
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
              <a>Hoe werkt het</a>
            </Link>
          </li>
        </div>
        <div>
          <li className={styles.legalDisclaimer}>
            Copyright © 2020. All rights reserved.
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Footer;
