import { useEffect, useState } from "react";
import { Button, Modal } from "rsuite";
import { Icon } from "@rsuite/icons";
import { FaStopCircle } from "react-icons/fa";
import { SingleCard } from "../SingleCard/SingleCard";

import styles from "./Game.module.css";

import Helmet from "../../assets/helmet.png";
import Potion from "../../assets/potion.png";
import Ring from "../../assets/ring.png";
import Scroll from "../../assets/scroll.png";
import Shield from "../../assets/shield.png";
import Sword from "../../assets/sword.png";

const cardImages = [
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
  matched: boolean;
}

interface GameProps {
  handleContentChange: (value: string) => void;
}

export const Game = ({ handleContentChange }: GameProps) => {
  const [cards, setCards] = useState<CardProps[]>();
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<CardProps | null>();
  const [choicetwo, setChoiceTwo] = useState<CardProps | null>();
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    handleContentChange("Home");
    setOpen(false);
  };

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ src: card.src, id: Math.random(), matched: false }));

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

  const checksMatch = () => {
    return cards?.every((card) => card.matched);
  };

  //compare 2 selecteds cards
  useEffect(() => {
    const result = checksMatch();
    if (result) {
      handleContentChange("NewGameConfirm");
      //setShowPopUp(true);
    }
    if (choiceOne && choicetwo) {
      setDisabled(true);
      if (choiceOne?.src === choicetwo?.src) {
        setCards((prevCards) => {
          return prevCards?.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurns();
      } else {
        setTimeout(() => resetTurns(), 1000);
      }
    }
  }, [choiceOne, choicetwo]);

  //reset choices and increase turn
  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <>
      <div className={styles.box}>
        <div className={styles.gameHeader}>
          <h3>Magic Match</h3>
          <Button appearance="default" onClick={shuffleCards}>
            Start Game
          </Button>
        </div>
        <div className={styles.cardGrid}>
          {cards?.map((card) => (
            <SingleCard
              key={card.id}
              handleChoice={handleChoice}
              card={card}
              flipped={card === choiceOne || card === choicetwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        {cards && (
          <div className={styles.buttonBox}>
            <button onClick={handleOpen}>
              {" "}
              <Icon as={FaStopCircle} color="red" />
              Exit
            </button>
          </div>
        )}
      </div>
      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
