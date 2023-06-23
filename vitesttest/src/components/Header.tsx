"use client";
import { useState } from "react";

// import classes from "./Header.module.css";

export default function Header() {
  const [buttonColor, setButtonColor] = useState("red");

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const buttonHandler = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={buttonHandler}>
        Change to {newButtonColor}
      </button>
      <input type={"checkbox"}></input>
    </div>
  );
}
