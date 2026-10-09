import styles from "../Styles/SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className={styles.titleBox}>
      <p className={styles.smallTitle}>PORTFOLIO</p>

      <h2>{title}</h2>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;