import "./index.css";
//display apps for styling, props and components
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const openingHour = 12;
  const closingHour = 22;
  return (
    <div className="container">
      <Header />
      <Main pizzaList={pizzaData} />
      <Footer openTime={openingHour} closeTime={closingHour} />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Pizza-licious </h1>
    </header>
  );
}
//  {<br><br/>:<p>We are working on our menu, come back later !</p>}
function Main({ pizzaList }) {
  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      {pizzaList.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our very own stone oven. All organic. All delicious.
          </p>
          <ul className="pizzas">
            {pizzaList.map((curr, i) => {
              return <Pizza {...curr} key={i} />;
            })}
          </ul>
        </>
      ) : (
        <p>We are working on our menu, come back later !</p>
      )}
    </div>
  );
}

//to do ; finishing and destructuring !

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : null}`}>
      <img src={photoName} alt="Pizza img"></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{price}</p>

        {soldOut && <span> SOLD OUT </span>}
      </div>
    </li>
  );
}

function Footer({ openTime, closeTime }) {
  const nowHour = new Date().getHours();
  const isOpen = nowHour < closeTime && nowHour >= openTime;
  const message = isOpen ? (
    <>
      <p>
        We're open from {openTime}:00 to {closeTime}:00. Come visit us or order
        online !
      </p>
      <button className="btn">Order</button>
    </>
  ) : (
    <p>
      Sorry, we are not open yet. We are happy to welcome you between {openTime}
      :00 to {closeTime}:00
    </p>
  );
  return <footer className="footer order">{message}</footer>;
}
export default App;
