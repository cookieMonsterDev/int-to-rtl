import "./App.css";
import { useState } from "react";

const style1 = { backgroundColor: "blue", color: "white" };
const style2 = { backgroundColor: "red", color: "white" };

function App() {
  const [state, setState] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        style={state ? style1 : style2}
        onClick={() => setState((prev) => !prev)}
        disabled={toggle ? true : false}
      >
        {state ? "Change to red" : "Change to blue"}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={() => setToggle((prev) => !prev)}
      />
    </div>
  );
}

export default App;
