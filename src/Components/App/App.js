import ImageCropper from "../ImageCropper/ImageCropper";
import test from "../../fatefullFindings.jpeg";

function App() {
  return (
    <div>
      <header>
        <h1>React 🍎 </h1>
      </header>
      <ImageCropper src={test} />
    </div>
  );
}

export default App;
