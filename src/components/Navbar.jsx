import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center px-2 md:px-4 lg:px-16 w-full h-[10vh] bg-[#FFB534] shadow-md">
      <NavLink to="/">
        <h1 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
          E-Cart
        </h1>
      </NavLink>
      <NavLink to="/cart">
        <div className="relative">
          <svg
            className="w-10 h-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}",
                }}
              />
            </defs>
            <g id="ic-ecommerce-cart">
              <g id="Vrstva_536" data-name="Vrstva 536">
                <polyline
                  className="cls-1"
                  points="1.68 2.77 5.18 2.77 8.34 16.48 21 16.48 22.32 6.72 6.09 6.72"
                />
                <rect
                  className="cls-1"
                  x="9.3"
                  y="18.62"
                  width="2.61"
                  height="2.61"
                  rx="1.3"
                />
                <rect
                  className="cls-1"
                  x="9.3"
                  y="18.62"
                  width="2.61"
                  height="2.61"
                  rx="1.3"
                />
                <rect
                  className="cls-1"
                  x="16.16"
                  y="18.62"
                  width="2.61"
                  height="2.61"
                  rx="1.3"
                />
              </g>
            </g>
          </svg>
          <div className="bg-red-700 text-white font-medium px-2 rounded-[50%] absolute -top-[10px] -right-[10px]">
            {cart.length}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
