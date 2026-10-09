import styles from "../Styles/Card.module.css";

interface CardProps {
  title: string;
  description: string;
  icon?: string;
}

function Card({ title, description, icon }: CardProps) {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.icon}>{icon}</div>}

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default Card;