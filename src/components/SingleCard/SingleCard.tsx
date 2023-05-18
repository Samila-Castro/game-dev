import styles from "./SingleCard.module.css";
import Cover from "../../assets/cover.png";

interface CardProps {
  src: string;
  id?: number;
  matched: boolean;
}

interface SingleCardProps {
  card: CardProps;
  handleChoice: (card: CardProps) => void;
  flipped?: boolean;
  disabled: boolean;
}

export const SingleCard = ({
  card,
  handleChoice,
  flipped,
  disabled,
}: SingleCardProps) => {
  const handleClik = (card: CardProps) => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={styles.card} key={card.id}>
      <div className={flipped ? styles.flipped1 : ""}>
        <img className={styles.front} src={card.src} alt="card front" />
        <img
          className={styles.back}
          src={Cover}
          alt="card back"
          onClick={() => handleClik(card)}
        />
      </div>
    </div>
  );
};
