import SectionTitle from "./SectionTitle";
import styles from "../Styles/Skills.module.css";

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 70 },
  { name: "React.js", level: 70 },
  { name: "Python", level: 80 },
  { name: "MySQL", level: 75 },
  { name: "Bootstrap", level: 70 },
];

function Skills() {
  return (
    <section className={styles.section}>
      <SectionTitle
        title="My Skills"
        subtitle="Technologies and tools I work with"
      />

      <div className={styles.grid}>
        {skills.map((skill) => (
          <div className={styles.skillCard} key={skill.name}>
            <div className={styles.skillHeader}>
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className={styles.bar}>
              <div
                className={styles.progress}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;