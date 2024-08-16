import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles["footer-menu"]}>
        <ul>
          <li>
            <a
              href="https://github.com/jestella"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/jestellaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:je.stella.lee@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <p className={styles.copyright}>
        © Stella Lee {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
