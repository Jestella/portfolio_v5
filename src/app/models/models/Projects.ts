import projectData from "../json/projectData.json";

export interface ProjectData {
  id: number;
  title: string;
  year: string;
  sub: string;
  brief?: string;
  tech: string[];
  imageUrl: string;
  liveDemo: string;
  gitHub: string;
  description1: string;
  description2: string;
}

const projects: ProjectData[] = projectData;

export default projects;
