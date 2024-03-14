import { useState } from "react";
import Steps from "./Steps";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your income 🤑",
  "LAST ",
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  function showStepsHandler() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button className="close" onClick={showStepsHandler}>
        x
      </button>
      {isOpen && <Steps messages={messages} />}
    </>
  );
}
