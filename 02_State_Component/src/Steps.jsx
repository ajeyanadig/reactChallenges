import { useState } from "react";

export default function Steps({ messages }) {
  function showActive(val) {
    return val > step ? "" : "active";
  }
  const [step, setStep] = useState(0);
  function goNext() {
    if (step < messages.length - 1) setStep((v) => v + 1);
  }
  function goPrev() {
    if (step > 0) setStep(step - 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        {messages.map((curr, i, arr) => {
          return (
            <div className={showActive(i)} key={i + 1}>
              {i + 1}
            </div>
          );
        })}
      </div>
      <div className="message">
        Step {step + 1}: {messages[step]}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={goPrev}
        >
          <span>Prev</span>
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={goNext}
        >
          <span>Next</span>
        </button>
      </div>
    </div>
  );
}
