import { Icon } from "@rsuite/icons";
import { FaHome } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import GearIcon from "@rsuite/icons/Gear";
import styles from "./SideNave.module.css";

interface SideNaveProps {
  handleContentChange: (value: string) => void;
}
export const SidenavC = ({ handleContentChange }: SideNaveProps) => {
  return (
    <div className={styles.sideNave}>
      <div className={styles.buttonsWrapper}>
        <div className={styles.linksWrapper}>
          <button onClick={() => handleContentChange("Home")}>
            <Icon as={FaHome} color="#fff" />
          </button>
          <button onClick={() => handleContentChange("Game")}>
            {" "}
            <Icon as={FaGamepad} color="#fff" />
          </button>
          <button>
            {" "}
            <Icon as={FaGamepad} color="#fff" />
          </button>
          <button>
            <Icon as={FaGamepad} color="#fff" />
          </button>
        </div>
        <div className={styles.gearIcon}>
          {" "}
          <Icon as={GearIcon} pulse />
        </div>
      </div>
    </div>
  );
};
