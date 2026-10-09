import SectionTitle from "./SectionTitle";
import styles from "../Styles/Projects.module.css";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  icon: string;
}

const projects: Project[] = [
  {
    title: "Emotion Based Music Recommender",
    description:
      "A web application that recommends music based on the selected emotion.",
    technologies: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/",
    demo: "#",
    icon: "🎵",
  },
  {
    title: "Farmer Schemes Assistant",
    description:
      "A web application designed to help users explore agricultural schemes and related information.",
    technologies: ["React", "JavaScript", "Bootstrap", "MySQL"],
    github: "https://github.com/",
    demo: "#",
    icon: "🌾",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website showcasing skills, education, certifications and projects.",
    technologies: ["React", "TypeScript", "CSS", "Vite"],
    github: "https://github.com/",
    demo: "#",
    icon: "💻",
  },
];

function Projects() {
  return (
    <section className={styles.section}>
      <SectionTitle
        title="My Projects"
        subtitle="Some of the projects I have worked on"
      />

      <div className={styles.grid}>
        {projects.map((project) => (
          <div className={styles.projectCard} key={project.title}>
            <div className={styles.icon}>{project.icon}</div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className={styles.tags}>
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className={styles.buttons}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;