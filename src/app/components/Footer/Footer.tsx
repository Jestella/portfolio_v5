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
      <div className="center">
        <p className={styles["footer-message"]}>
          한국어로 문의하실 수 있습니다. 日本語でお問い合わせください。
        </p>
        <br />
        <p>© Stella Lee {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
