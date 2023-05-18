import "./App.css";
import { SidenavC } from "./components/SideNave/SideNave";

interface IProps {
  children: any;
  handleContentChange: (value: string) => void;
}

export const Layout = ({ handleContentChange, children }: IProps) => {
  return (
    <>
      <SidenavC handleContentChange={handleContentChange} />
      <div className="mainSide">{children}</div>
    </>
  );
};
