import { useState } from "react";
// Controlled Elements lessgo(4 step process), with steps.
/* Steps 
  1) States setup for inputs
  2) Control Form Submit
  3) Input Data, bind with state with value=state
  4) Event handler, bind with onChange=setState(e.target.value) 

  Summary : data, reflection, data handling, basically the entire form state is now handled by React in proper sync. Forms don't refresh the page(2), UI gets data from state(3), changes update state(4).
  */
export default function Form({ travelItems, onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function addItemHandler(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    setDescription((val) => "");
    setQuantity((val) => 1);
    onAddItems(newItem);
  }

  return (
    <form className="add-form" onSubmit={addItemHandler}>
      <h3>What do you need for your trip 😍</h3>
      <button>Add</button>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
    </form>
  );
}
