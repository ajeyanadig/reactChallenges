import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Stats from "./components/Stats";
import List from "./components/List";
import Logo from "./components/Logo";

export default function App() {
  const [travelItems, setTravelItems] = useState([]);

  function addItemsHandler(newVal) {
    setTravelItems([...travelItems, newVal]);
  }
  function deleteItemsHandler(id) {
    setTravelItems(travelItems.filter((curr) => id !== curr.id));
  }
  function toggleItemStatus(id) {
    setTravelItems(
      travelItems.map((curr) =>
        curr.id === id ? { ...curr, packed: !curr.packed } : curr
      )
    );
  }
  function deleteAllItemsHandler() {
    setTravelItems([]);
  }
  //sort left
  return (
    <div className="app">
      <Logo />
      <Form travelItems={travelItems} onAddItems={addItemsHandler} />
      <List
        travelItems={travelItems}
        onDeleteItem={deleteItemsHandler}
        onToggle={toggleItemStatus}
        onClear={deleteAllItemsHandler}
      />
      <Stats travelItems={travelItems} />
    </div>
  );
}
