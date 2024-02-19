import { useContext} from "react";
import { formatPrice } from "../utils/utils";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleIncrease = () => {
    updateQuantity(item._id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item._id, item.quantity - 1);
    }
  };

  const calculateTotal = () => {
    return (item.price * item.quantity).toFixed(2);
  };

  return (
    <div className="w-full lg:w-11/12 md:h-20 flex flex-col md:flex-row flex-wrap justify-between items-center bg-white shadow-md my-2 p-3">
      <h1 className="text-lg lg:w-1/6">{item && item.name}</h1>
      <div className=" lg:w-1/6">
        <img
          src={item && item.image}
          alt="item"
          className="w-16 object-cover"
        />
      </div>
      <h2 className=" lg:w-1/6">
        <span>price: </span>
        {item && formatPrice(item.price)}
      </h2>
      <div className=" lg:w-1/6 flex gap-2 items-center">
        <button
          className="bg-red-400 w-8 h-8 text-xl font-bold text-zinc-800 rounded-md"
          onClick={handleDecrease}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          className="bg-green-400 w-8 h-8 text-xl font-bold text-zinc-800 rounded-md"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <div className="lg:w-1/6">
        Total: {item && formatPrice(calculateTotal())}
      </div>

      <button
        className="bg-red-600 text-white px-3 rounded-md hover:bg-red-300"
        onClick={() => removeFromCart(item._id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
