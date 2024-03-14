//derived state
export default function Stats({ travelItems }) {
  //early return for empty array, barely performance improvement but logical
  const totalItems = travelItems.length;
  if (!totalItems) {
    return (
      <div className="stats">
        <em>Lets start by adding items !</em>
      </div>
    );
  }

  const numPacked = travelItems.reduce(
    (acc, curr) => acc + Number(curr.packed),
    0
  );
  const packPercent = Math.round((numPacked / totalItems) * 100);
  return (
    <div className="stats">
      {packPercent !== 100 ? (
        <em>
          Things packed : {numPacked} out of {totalItems} ({packPercent}% done)
        </em>
      ) : (
        <em>We are READY ! Lets go ✈️</em>
      )}
    </div>
  );
}
