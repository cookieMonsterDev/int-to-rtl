import { useState } from "react";
import './ColorButton.css'


export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

export const ColorButton = () => {
  const [state, setState] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        className={`btn ${state ? 'isOn' : ''}`}
        onClick={() => setState((prev) => !prev)}
        disabled={toggle ? true : false}
        style={toggle ? {backgroundColor: "gray"} : {}}
      >
        {state ? "Change to red" : "Change to blue"}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={() => setToggle((prev) => !prev)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}
