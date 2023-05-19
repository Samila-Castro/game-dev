import { Button } from "rsuite";
import styles from "./NewGameConfirm.module.css";

interface NewGameConfirmProps {
  handleContentChange: (value: string) => void;
}
export const NewGameConfirm = ({
  handleContentChange,
}: NewGameConfirmProps) => {
  return (
    <div className={styles.box}>
      <h4>Deseja iniciar outra partida?</h4>
      <div className={styles.buttonsBox}>
        <Button
          appearance="primary"
          onClick={() => handleContentChange("Game")}
        >
          Sim
        </Button>
        <Button
          appearance="default"
          onClick={() => handleContentChange("Home")}
        >
          Não
        </Button>
      </div>
    </div>
  );
};
