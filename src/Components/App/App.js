import { useState } from "react";
import FishBody from "../FishBody/FishBody";
import chroma from "chroma-js";

function App() {
  const [bodyColor, setBodyColor] = useState("#00FF00");
  const [bodyShadeColor, setBodyShadeColor] = useState(
    chroma("#00FF00").darken()
  );
  const [finColor, setFinColor] = useState("#FF0000");
  const [dorsalColor, setDorsalColor] = useState("#3C2210");
  const [eyeColor, setEyeColor] = useState("#FFFF00");

  const handleBodyColorChange = (event) => {
    setBodyColor(event.target.value);
    setBodyShadeColor(chroma(event.target.value).darken());
  };

  const handleFinColorChange = (event) => {
    setFinColor(event.target.value);
  };

  const handleDorsalColorChange = (event) => {
    setDorsalColor(event.target.value);
  };

  const handleEyeColorChange = (event) => {
    setEyeColor(event.target.value);
  };

  return (
    <div>
      <header>
        <h1>React 🍎 </h1>
      </header>
      <p>body</p>
      <input type="color" onChange={handleBodyColorChange} value={bodyColor} />
      <br />
      <p>fins</p>
      <input type="color" onChange={handleFinColorChange} value={finColor} />
      <br />
      <p>dorsal</p>
      <input
        type="color"
        onChange={handleDorsalColorChange}
        value={dorsalColor}
      />
      <br />
      <p>eye</p>
      <input type="color" onChange={handleEyeColorChange} value={eyeColor} />
      <FishBody
        bodyColor={bodyColor}
        bodyShadeColor={bodyShadeColor}
        finColor={finColor}
        dorsalColor={dorsalColor}
        eyeColor={eyeColor}
      />
    </div>
  );
}

export default App;
