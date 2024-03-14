import { useState } from "react";

export default function List({ travelItems, onDeleteItem, onToggle, onClear }) {
  const [sortBy, setSortBy] = useState("added");
  let sortedItems = [...travelItems];
  switch (sortBy) {
    case "added":
      break;
    case "description":
      sortedItems.sort((a, b) => {
        return a.description.localeCompare(b.description);
      });
      break;
    case "packed":
      sortedItems.sort((a, b) => Number(b.packed) - Number(a.packed));
      break;
    default:
      sortedItems = [...travelItems];
      break;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((curr) => (
          <Item
            item={curr}
            key={curr.id}
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
          />
        ))}
      </ul>

      <div className="actions">
        {/*controlled ele here, in sync*/}
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="added">Sort by added</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
}
function Item({ item, onDeleteItem, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggle(item.id)}
      ></input>
      <span>{item.quantity}</span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        🗑️
      </button>
    </li>
  );
}
