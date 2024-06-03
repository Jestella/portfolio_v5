import { DevlogData } from "./models/Devlogs";
import devlogs from "./models/Devlogs";

interface Props {
  project: DevlogData;
}

const DevlogItems: React.FC<Props> = ({ project }) => {
  const isLatest = project.id === devlogs[devlogs.length - 1].id;

  return (
    <section id={`work-${project.id}`} className="devlog-item">
      <p className="devlog-date">{project.month}</p>
      <h3 className="project-title">
        {project.title}
        {isLatest ? <span className="new">new!</span> : ""}
      </h3>
      <p>{project.sub}</p>
      <p className="tech">#{project.tech.join(" #")}</p>
      <p>
        &#128279;{" "}
        <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">
          <span className="devlog-link">{project.link}</span>
        </a>
      </p>
    </section>
  );
};

export default DevlogItems;
