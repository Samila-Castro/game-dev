import { Card } from "./components/Card/Card";
import "./App.css";
import { SidenavC } from "./components/SideNave/SideNave";

function App() {
  return (
    <>
      <SidenavC />
      <div className="mainSide">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
