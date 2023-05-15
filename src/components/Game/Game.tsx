import { useEffect, useState } from "react";
import { Button } from "rsuite";
import styles from "./Game.module.css";
import Cover from "../../assets/cover.png";
import Helmet from "../../assets/helmet.png";
import Potion from "../../assets/potion.png";
import Ring from "../../assets/ring.png";
import Scroll from "../../assets/scroll.png";
import Shield from "../../assets/shield.png";
import Sword from "../../assets/sword.png";

const cardImages = [
  { src: Cover, matched: false },
  { src: Helmet, matched: false },
  { src: Potion, matched: false },
  { src: Ring, matched: false },
  { src: Scroll, matched: false },
  { src: Shield, matched: false },
  { src: Sword, matched: false },
];

interface CardProps {
  src: string;
  id?: number;
}

function Game() {
  const [cards, setCards] = useState<CardProps[]>();
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<CardProps | null>();
  const [choicetwo, setChoiceTwo] = useState<CardProps | null>();

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ src: card.src, id: Math.random() }));

    setCards(shuffleCards);
    setTurns(0);
  };

  //handle a choice
  const handleChoice = (card: CardProps) => {
    if (choiceOne) {
      setChoiceTwo(card);
    } else {
      setChoiceOne(card);
    }
  };

  //compare 2 selecteds cards
  useEffect(() => {
    if (choiceOne && choicetwo) {
      if (choiceOne?.src === choicetwo?.src) {
        console.log("Those cards match");
        resetTurns();
      } else {
        console.log("Those cards dont match");
        resetTurns();
      }
    }
  }, [choiceOne, choicetwo]);

  //reset choices and increase turn
  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className={styles.box}>
      <h1>Magic Match</h1>
      <Button appearance="ghost" onClick={shuffleCards}>
        New Game
      </Button>
      <div className={styles.cardGrid}>
        {cards?.map((card) => (
          <div className={styles.card} key={card.id}>
            <img className={styles.front} src={card.src} alt="card front" />
            <img
              className={styles.back}
              src={Cover}
              alt="card back"
              onClick={() => handleChoice(card)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { Game };
