import "./App.css";
import { Layout } from "./Layout";
import { Home } from "./components/Home/Home";
import { Game } from "./components/Game/Game";
import { ReactNode, useState } from "react";

function App() {
  const [currentComponent, SetCurrentComponent] = useState<ReactNode>("Home");

  const handleContentChange = (value: string) => {
    SetCurrentComponent(value);
  };

  const components = () => {
    if (currentComponent === "Home")
      return <Home handleContentChange={handleContentChange} />;
    if (currentComponent === "Game")
      return <Game handleContentChange={handleContentChange} />;
    return <Home handleContentChange={handleContentChange} />;
  };

  return (
    <>
      <Layout handleContentChange={handleContentChange}>{components()}</Layout>
    </>
  );
}

export default App;
