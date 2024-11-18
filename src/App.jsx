import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 id="storyPlugin">Story Plugin</h1>
        <h1 id="sfPulgin">Shoppable Feeds Plugin</h1>
        <h1 id="3dSFPlugin">3D SF Plugin</h1>
      </div>
    </>
  );
}

export default App;
