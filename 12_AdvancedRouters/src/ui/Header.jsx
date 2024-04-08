import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">Fast React Pizza Co.</Link>
      </div>
      <div>
        <SearchOrder />
      </div>
      <p>Ajeya</p>
    </header>
  );
}

export default Header;
