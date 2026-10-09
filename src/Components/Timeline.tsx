import SectionTitle from "./SectionTitle";
import styles from "../Styles/Timeline.module.css";

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2026 - Present",
    title: "Master of Computer Applications",
    institution: "P. R. Pote Patil College of Engineering and Management",
    description:
      "Currently pursuing MCA and developing skills in software development, web technologies and programming.",
  },
  {
    year: "Completed",
    title: "Bachelor of Computer Applications",
    institution: "Rashtrasant Tukadoji Maharaj Nagpur University",
    description:
      "Completed BCA with a foundation in programming, databases, web development and computer applications.",
  },
];

function Timeline() {
  return (
    <section className={styles.section}>
      <SectionTitle
        title="Education Journey"
        subtitle="My academic journey and learning experience"
      />

      <div className={styles.timeline}>
        {timeline.map((item, index) => (
          <div
            className={`${styles.item} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            key={item.title}
          >
            <div className={styles.content}>
              <span className={styles.year}>{item.year}</span>

              <h3>{item.title}</h3>

              <h4>{item.institution}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;