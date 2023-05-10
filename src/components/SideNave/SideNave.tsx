import { Icon } from "@rsuite/icons";
import { FaHome } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import GearIcon from "@rsuite/icons/Gear";

import styles from "./SideNave.module.css";
export const SidenavC = () => {
  return (
    <div className={styles.sideNave}>
      <div className={styles.buttonsWrapper}>
        <div className={styles.linksWrapper}>
          <a href="">
            <Icon as={FaHome} color="#fff" />
          </a>
          <a href="">
            {" "}
            <Icon as={FaGamepad} color="#fff" />
          </a>
          <a href="">
            {" "}
            <Icon as={FaGamepad} color="#fff" />
          </a>
          <a href="">
            <Icon as={FaGamepad} color="#fff" />
          </a>
        </div>
        <div className={styles.gearIcon}>
          {" "}
          <Icon as={GearIcon} pulse />
        </div>
      </div>
    </div>
  );
};
