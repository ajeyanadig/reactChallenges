/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utilities/helpers";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className=" py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity currentQuantity={currentQuantity} id={pizzaId} />
        <DeleteItem pizzaId={pizzaId} key={pizzaId}></DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
