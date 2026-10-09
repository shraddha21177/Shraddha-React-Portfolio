import SectionTitle from "./SectionTitle";
import styles from "../Styles/Stats.module.css";

interface Stat {
  number: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  {
    number: "3+",
    label: "Projects",
    icon: "🚀",
  },
  {
    number: "8+",
    label: "Technical Skills",
    icon: "💻",
  },
  {
    number: "3+",
    label: "Certifications",
    icon: "🏆",
  },
  {
    number: "2+",
    label: "Internship Experiences",
    icon: "🎓",
  },
];

function Stats() {
  return (
    <section className={styles.section}>
      <SectionTitle
        title="My Journey"
        subtitle="A quick look at my learning journey"
      />

      <div className={styles.grid}>
        {stats.map((stat) => (
          <div className={styles.statCard} key={stat.label}>
            <div className={styles.icon}>{stat.icon}</div>

            <h3>{stat.number}</h3>

            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;