import "./App.css";
import { Layout } from "./Layout";
import { Home } from "./components/Home/Home";
import { Game } from "./components/Game/Game";
import { ReactNode, useState } from "react";

function App() {
  const [currentComponent] = useState<ReactNode>("Game");

  const components = () => {
    if (currentComponent === "Home") return <Home />;
    if (currentComponent === "Game") return <Game />;
    return <Home />;
  };

  return <Layout>{components()}</Layout>;
}

export default App;
