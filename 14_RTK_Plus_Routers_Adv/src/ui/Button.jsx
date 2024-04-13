/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Button({ disabled, children, to, type, onClick }) {
  const base =
    " text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed   ";
  const styles = {
    primary: base + "  px-4 py-3 sm:px-6 sm:py-4 sm:text-base",
    small: base + " text-xs px-4 py-2 md:px-5 md:py-2.5 md:text-base",
    round: base + " text-sm px-2.5 py-1 md:px-3.5 md:py-2 md:text-base",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 hover:text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:text-stone-800 focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5 sm:text-base",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
