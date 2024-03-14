/*
Accordion
import "./styles.css";
import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion className="accordion" dataList={faqs} />
    </div>
  );
}

function Accordion({ dataList }) {
  return (
    <>
      {dataList.map((curr, i) => {
        return (
          <AccordionItem num={i + 1} key={i + 1} title={curr.title}>
            {curr.text}
          </AccordionItem>
        );
      })}
    </>
  );
}
function AccordionItem({ num, title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={isOpen ? "item open" : "item"}>
      <div className="number">{num}</div>
      <div className="title">{title}</div>
      <div
        className="icon"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "-" : "+"}
      </div>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
*/
