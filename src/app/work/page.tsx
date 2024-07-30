"use client";

import { useState } from "react";
import Image from "next/image";
import projects from "../models/Projects";

import styles from "./work.module.scss";

export default function Page() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [showLiveDemoButton, setShowLiveDemoButton] = useState<{
    [key: number]: boolean;
  }>({});

  const handleTechClick = (tech: string) => {
    setSelectedTech(tech === "All" ? null : tech);
  };

  const filteredProjects = selectedTech
    ? projects.filter((project) => project.tech.includes(selectedTech))
    : projects;

  const openProject = (liveDemo: string) => {
    window.open(liveDemo, "_blank");
  };

  return (
    <div className="container">
      <div className={styles["work-page"]}>
        <div className={styles["work-tech-buttons"]}>
          <button
            className={!selectedTech ? styles.active : ""}
            onClick={() => handleTechClick("All")}
          >
            All
          </button>
          <button onClick={() => handleTechClick("React")}>React</button>
          <button onClick={() => handleTechClick("Next.js")}>Next.js</button>
          <button onClick={() => handleTechClick("Angular")}>Angular</button>
          <button onClick={() => handleTechClick("TypeScript")}>
            TypeScript
          </button>
          <button onClick={() => handleTechClick("Shopify")}>Shopify</button>
          <button onClick={() => handleTechClick("WordPress")}>
            WordPress
          </button>{" "}
          <button onClick={() => handleTechClick("IoT")}>IoT</button>
          <button onClick={() => handleTechClick("UI Design")}>
            UI Design
          </button>
        </div>

        <div className={styles["work-list"]}>
          <div className={styles["work-project-container"]}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                id={`#work-${project.id}`}
                className={`${styles["work-project"]} ${
                  index % 2 === 0 ? styles["left-image"] : styles["right-image"]
                }`}
              >
                <div className={styles["work-project-content-container"]}>
                  <div className={styles["work-project-content"]}>
                    <p className={styles["project-title"]}>{project.title}</p>
                    <p className={styles["project-desc"]}>{project.sub}</p>
                    <p className={styles["tech"]}>#{project.tech.join(" #")}</p>
                  </div>
                </div>
                <div
                  className={styles["work-project-image-container"]}
                  onMouseEnter={() =>
                    setShowLiveDemoButton((prevState) => ({
                      ...prevState,
                      [project.id]: true,
                    }))
                  }
                  onMouseLeave={() =>
                    setShowLiveDemoButton((prevState) => ({
                      ...prevState,
                      [project.id]: false,
                    }))
                  }
                >
                  <Image
                    src={project.imageUrl}
                    alt="project image"
                    width={500}
                    height={300}
                    className={styles["work-project-image"]}
                  />

                  {showLiveDemoButton[project.id] && (
                    <button
                      className={styles["live-demo-button"]}
                      onClick={() => openProject(project.liveDemo)}
                    >
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
