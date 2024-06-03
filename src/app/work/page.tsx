"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./work.module.scss";
import projects from "../models/Projects";

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
      <p className="section-title">/* Work */</p>
      <div className="work-page">
        <div className="work-tech-buttons">
          <button
            className={!selectedTech ? "active" : ""}
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

        <div className="work-list">
          <div className="work-project-container">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                id={`#work-${project.id}`}
                className={`work-project ${
                  index % 2 === 0 ? "left-image" : "right-image"
                }`}
              >
                <div className="work-project-content-container">
                  <div className="work-project-content">
                    <p className="project-title">{project.title}</p>
                    <p className="project-sub">{project.sub}</p>
                    <p className="tech">#{project.tech.join(" #")}</p>
                  </div>
                </div>
                <div
                  className="work-project-image-container"
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
                  <img
                    src={project.imageUrl}
                    alt="project image"
                    className="work-project-image"
                  />
                  {showLiveDemoButton[project.id] && (
                    <button
                      className="live-demo-button"
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
