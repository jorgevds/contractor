import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul>
          <li className={styles.appName}>
            <Link href="/index">
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
        <div>
          <ul>
            <li className={styles.legalDisclaimer}>
              Copyright © 2020. All rights reserved.
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
