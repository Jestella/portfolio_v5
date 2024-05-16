import { DevlogData } from "./models/Devlogs";
import devlogs from "./models/Devlogs";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLink } from "@fortawesome/free-solid-svg-icons";

interface Props {
  project: DevlogData;
}

const DevlogItems: React.FC<Props> = ({ project }) => {
  const isLatest = project.id === devlogs[devlogs.length - 1].id;

  return (
    <section id={`work-${project.id}`} className="devlog-item">
      <p className="devlog-date">{project.month}</p>
      <h3>
        {project.title}
        {isLatest ? <span className="new">new!</span> : ""}
      </h3>
      <p className="devlog-tech">#{project.tech.join(" #")}</p>
      <p>
        {/* <FontAwesomeIcon icon={faLink} color="#c3bebe" size="sm" />{" "} */}
        <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">
          <span className="devlog-link">{project.link}</span>
        </a>
      </p>
    </section>
  );
};

export default DevlogItems;
