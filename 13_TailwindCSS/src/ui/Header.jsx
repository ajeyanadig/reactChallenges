import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <div className="tracking-widest">
        <Link to="/">Fast React Pizza Co.</Link>
      </div>
      <div>
        <SearchOrder />
      </div>
      <Username></Username>
    </header>
  );
}

export default Header;
