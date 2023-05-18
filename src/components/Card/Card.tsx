import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  image_source?: string;
  onClick: () => void;
}

export const Card = ({
  title,
  description,
  onClick,
  image_source,
}: CardProps) => {
  return (
    <div className={styles.cardList} onClick={onClick}>
      <article className={styles.card}>
        <figure className={styles.cardIimage}>
          <img
            src={image_source}
            alt="An orange painted blue, cut in half laying on a blue background"
          />
        </figure>
        <div className={styles.cardHeader}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className={styles.cardFooter}></div>
      </article>
    </div>
  );
};
