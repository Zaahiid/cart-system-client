import { useContext, useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";
import { formatPrice } from "../utils/utils";
import CustomerInfo from "./CustomerInfo";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [cartData, setCartData] = useState(cart);
  const [showForm, setShowForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const calculateGrandTotal = () => {
    return cartData
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const addCartForm = async (data) => {
    const bodyData = {
      customerInfo: data,
      cart: cartData,
      totalAmount: Number(calculateGrandTotal()),
    };
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/order`, bodyData);
    if (response?.data?.status === "201") {
      alert("Order recieved, Please proceed payment.");
    }
  };

  const makePayment = async () => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUB_KEY);
    const body = {
      products: cart,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/order/checkout`, body);
    const result = await stripe.redirectToCheckout({
      sessionId: response?.data?.id,
    });
  };

  const handleFormSubmit = (formData) => {
    setCustomerInfo(formData);
    addCartForm(formData);
    setShowForm(false);
    alert("Form Submitted successfully");
  };

  useEffect(() => {
    setCartData(cart);
  }, [cart]);

  return (
    <div className="min-h-screen mx-10">
      <h1 className="text-xl font-bold text-black/70 text-center my-3 tracking-wide">
        Your Cart 🛒
      </h1>
      <div className="flex flex-col lg:flex-row gap-1 lg:gap-0">
        {cart.length === 0 ? (
          <h1 className="w-1-2 mx-auto text-7xl mt-[10%]">
            No items in your cart
          </h1>
        ) : (
          <div className="w-full lg:w-10/12">
            {cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
        )}
        {cart.length && (
          <div className="bg-white lg:w-2/12 lg:h-[25vh] py-3 md:py-0 rounded-md shadow-md">
            <h1 className="text-xl font-semibold my-5 mx-6">
              Grand Total : {formatPrice(calculateGrandTotal())}
            </h1>
            <button
              className="bg-black text-white w-11/12 rounded-md mx-3 mt-6 py-2 mb-1 hover:bg-black/70 transition-all duration-200"
              onClick={() => setShowForm(true)}
            >
              Buy now
            </button>
          </div>
        )}
      </div>
      {showForm && (
        <CustomerInfo
          onSubmit={handleFormSubmit}
          setShowForm={setShowForm}
          formData={formData}
          setFormData={setFormData}
          makePayment={makePayment}
        />
      )}
    </div>
  );
};

export default Cart;
