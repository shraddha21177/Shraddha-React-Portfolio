import SectionTitle from "./SectionTitle";
import Card from "./Card";
import styles from "../Styles/Examination.module.css";

interface Education {
  title: string;
  description: string;
  icon: string;
}

const education: Education[] = [
  {
    title: "Master of Computer Applications",
    description:
      "Currently pursuing MCA at P. R. Pote Patil College of Engineering and Management, Amravati.",
    icon: "🎓",
  },
  {
    title: "Bachelor of Computer Applications",
    description:
      "Completed BCA from Rashtrasant Tukadoji Maharaj Nagpur University.",
    icon: "📚",
  },
];

function Examination() {
  return (
    <div className={styles.section}>
      <SectionTitle
        title="Education & Examination"
        subtitle="My academic background"
      />

      <div className={styles.grid}>
        {education.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Examination;