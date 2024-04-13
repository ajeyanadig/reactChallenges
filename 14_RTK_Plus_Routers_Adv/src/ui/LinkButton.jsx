/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function LinkButton({ to, children }) {
  const navigate = useNavigate();
  const classNameStyle =
    "text-sm text-blue-500 hover:text-blue-600 hover:underline";
  if (to === "-1")
    return (
      <button className={classNameStyle} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={classNameStyle}>
      {children}
    </Link>
  );
}

export default LinkButton;
