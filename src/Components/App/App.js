import { useState } from "react";
import FishBody from "../FishBody/FishBody";

function App() {
  const [bodyColor, setBodyColor] = useState("#000000");

  const handleBodyColorChange = (event) => {
    setBodyColor(event.target.value);
  };

  return (
    <div>
      <header>
        <h1>React 🍎 </h1>
      </header>
      <p>body</p>
      <input type="color" onChange={handleBodyColorChange} />
      <br />
      <FishBody fill={bodyColor} />
    </div>
  );
}

export default App;
