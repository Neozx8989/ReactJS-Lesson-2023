import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./components/List";
import { ImageContextProvider } from "./Context/ImageContext";
import StopWatch from "./components/StopWatch";
import InputFocus from "./components/InputFocus";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [isLarge, setIsLarge] = useState(false);

  return (
    <div className="App">
      <VideoPlayer />
      {/* <InputFocus /> */}
      {/* <StopWatch /> */}
      {/* <label>
        Use Large Image
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
      </label>
      <hr />
      <List /> */}
    </div>
  );
}

export default App;
