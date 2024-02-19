import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatPrice } from "../utils/utils";

const ProductCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item);
  };
  return (
    <div className="w-11/12 md:w-2/5 lg:w-1/5 bg-white px-5 py-8 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
      <div className="h-[90%]">
        <img
          src={item.image}
          alt="Product"
          className="w-28 h-1/3 object-cover mx-auto"
        />
        <h3 className="text-lg font-medium my-1">{item.name}</h3>
        <h4 className="font-medium my-1">
          <span className="text-zinc-500">price: </span>
          {formatPrice(item.price)}
        </h4>
        <h6 className="mt-1 leading-7">{item.description}</h6>
      </div>
      <button
        className="w-full bg-blue-500 text-white font-medium py-[6px] rounded-lg hover:bg-blue-900  transition-all duration-300"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
