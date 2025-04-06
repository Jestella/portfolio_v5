"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles["header-scrolled"] : ""
      }`}
    >
      <div className={styles["header-left"]}>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} priority />
        </Link>
      </div>
      <nav className={styles["header-right"]}>
        <ul>
          <li>
            <Link
              href="/work"
              className={`${styles.link} ${
                pathname === "/work" ? "active" : ""
              }`}
            >
              work
            </Link>
          </li>
          <li>
            <Link
              href="/devlog"
              className={`${styles.link} ${
                pathname === "/devlog" ? "active" : ""
              }`}
            >
              devlog
            </Link>
          </li>
          <li>
            <Link
              href="/lab"
              className={`${styles.link} ${
                pathname === "/lab" ? "active" : ""
              }`}
            >
              lab
            </Link>
          </li>
          {/* <li>
            <Link
              href="/about"
              className={`${styles.link} ${
                pathname === "/about" ? "active" : ""
              }`}
            >
              about
            </Link>
          </li> */}
          {/* <li>
            <Link href="/dashboard">dashboard</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li> */}
          {/* <li>
            <Link
              href="/test-page"
              className={`link ${pathname === "/test" ? "active" : ""}`}
            >
              test
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
