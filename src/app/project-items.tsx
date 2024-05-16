import Link from "next/link";
import { ProjectData } from "./models/Projects";

interface Props {
  project: ProjectData;
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <div className="project">
      <Link href={`#work-${project.id}`}>{project.title}</Link>
      <section id={`work-${project.id}`}>
        <h2>{project.title}</h2>
        <p>{project.sub}</p>
      </section>
    </div>
  );
};

export default Project;
