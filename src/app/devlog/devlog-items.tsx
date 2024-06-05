import { DevlogData } from "../models/Devlogs";
import devlogs from "../models/Devlogs";

import styles from "./devlog.module.scss";

interface Props {
  project: DevlogData;
}

const DevlogItems: React.FC<Props> = ({ project }) => {
  const isLatest = project.id === devlogs[devlogs.length - 1].id;

  return (
    <section id={`work-${project.id}`} className={styles["devlog-item"]}>
      <p className={styles["devlog-date"]}>{project.month}</p>
      <h3 className={styles["project-title"]}>
        {project.title}
        {isLatest ? <span className={styles["new"]}>new!</span> : ""}
      </h3>
      <p className={styles["project-desc"]}>{project.sub}</p>
      <p className={styles["tech"]}>#{project.tech.join(" #")}</p>
      <p>
        &#128279;{" "}
        <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">
          <span className={styles["devlog-link"]}>{project.link}</span>
        </a>
      </p>
    </section>
  );
};

export default DevlogItems;
