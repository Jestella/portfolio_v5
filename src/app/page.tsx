import Image from "next/image";
import Link from "next/link";
import projects from "./models/Projects";

import styles from "./page.module.scss";

export default function Home() {
  const projectOrder = [1, 2, 3, 6, 7, 4];

  const sortedProjects = projectOrder.map(
    (id) => projects.find((project) => project?.id === id)!
  );

  return (
    <main>
      <div className="container">
        <section id="intro">
          <div className="home-intro">
            <h1>Stella Lee.</h1>
            <h1>
              A front-end Developer
              <br />
              based in Toronto,
              <br />
              who loves everything
              <br /> that has to do with
              <br />
              art, design & technology.
            </h1>
            <div className="message">
              <p>
                "Hi 👋🏻,
                <br />
                this website is currently under construction
                <br />
                and will be updated soon!"
                <br />
              </p>
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="skills-container">
            <ul className="skills-list">
              <li># Web</li>
              <li># App</li>
              <li># IoT</li>
              <li># UI/UX</li>
            </ul>
            <ul className="skills-list">
              <li># Angular</li>
              <li># React</li>
              <li># Next.js</li>
              <li># TypeScript</li>
              <li># Bootstrap</li>
            </ul>
            <ul className="skills-list">
              <li># Shopify</li>
              <li># WordPress</li>
              <li># Figma</li>
            </ul>
          </div>
        </section>
        <section id="featured-work">
          <div className="featured-projects">
            <p className="section-title">/* Work */</p>{" "}
            <ul>
              {sortedProjects.map((project) => (
                <li key={project.id}>
                  <Link
                    href={`/work#work-${project.id}`}
                    rel="noopener noreferrer"
                  >
                    <div className="featured-project-image-container">
                      <img src={project.imageUrl} alt="Project image" />
                    </div>
                    <p className="featured-project-title">{project.brief}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="featured-button-container">
            <button className="button-more">
              <Link href={"work"}>View More</Link>
            </button>
          </div>
        </section>
        <section>
          <div className="home-bottom">
            <div className="home-devlog">
              <p>
                Development Journey 👩🏻‍💻 &rarr;{" "}
                <button>
                  <Link href={"devlog"}>devlog</Link>
                </button>
              </p>
            </div>
            <div className="home-lab">
              <p>
                Random Experiments 💡 &rarr;{" "}
                <button>
                  <Link href={"lab"}>lab</Link>
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
