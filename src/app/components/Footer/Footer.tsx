import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav className="footer-menu">
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
              Mail
            </a>
          </li>
        </ul>
      </nav>
      <p className="copyright">© Stella Lee {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
