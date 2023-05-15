import "./App.css";
import { SidenavC } from "./components/SideNave/SideNave";

interface IProps {
  props: any;
}
function Layout(props: any) {
  return (
    <>
      <SidenavC />
      <div className="mainSide">{props.children}</div>
    </>
  );
}

export { Layout };
