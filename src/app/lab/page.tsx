import styles from "./lab.module.scss";

export default function Page() {
  return (
    <div className="container">
      <p className={styles["lab-intro"]}>
        Take a sneak peek at the latest experiments.
      </p>
      <div className={styles["lab-page"]}>
        <ul className={styles["experiments"]}>
          <li className={styles["lab-item"]}></li>
          <li className={styles["lab-item"]}></li>
          <li className={styles["lab-item"]}></li>
          <li className={styles["lab-item"]}></li>
          <li className={styles["lab-item"]}>Coming Soon!</li>
          <li className={styles["lab-item"]}></li>
          <li className={styles["lab-item"]}></li>
          <li className={styles["lab-item"]}></li>
          <li className={styles["lab-item"]}></li>
        </ul>
      </div>
    </div>
  );
}
