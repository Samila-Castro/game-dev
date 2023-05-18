import { Card } from "../Card/Card";
import image from "../../assets/game-image.png";
import pacImage from "../../assets/pac-man.svg";

interface HomeProps {
  handleContentChange: (value: string) => void;
}
export const Home = ({ handleContentChange }: HomeProps) => {
  return (
    <>
      <Card
        title="Magic Match"
        description="Puzzle game with an enchanting fantasy theme"
        image_source={image}
        onClick={() => handleContentChange("Game")}
      />
      <Card
        title="PAC-MAN Doodle"
        description="Magic Match is a rich puzzle "
        image_source={pacImage}
        onClick={() => handleContentChange("Game")}
      />
      <Card
        title="PAC-MAN Doodle"
        description="Puzzle game with an enchanting fantasy theme"
        image_source={
          "https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNDcwMTUwOQ&ixlib=rb-1.2.1&q=85"
        }
        onClick={() => handleContentChange("Game")}
      />
    </>
  );
};
