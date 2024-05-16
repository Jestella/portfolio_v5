import devlogData from "../json/devlogData.json";

export interface DevlogData {
  id: number;
  month: string;
  title: string;
  sub: string;
  tech: string[];
  link: string;
  linkUrl: string;
}

const devlogs: DevlogData[] = devlogData;

export default devlogs;
