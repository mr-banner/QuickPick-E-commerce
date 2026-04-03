import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const darkTheme = false;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currency = "₹";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  // ✅ GET USER ID FROM TOKEN
  let userId = null;
  if (token) {
    try {
      const decoded = jwtDecode(token);
      userId = decoded.id || decoded._id;
    } catch (error) {
      console.log("Token decode error:", error);
    }
  }

  const addToCart = async (itemId, size) => {
    if (!token) {
      toast.error("Please Login");
      navigate("/login");
      return;
    }

    if (!size) {
      toast.error("Select product size");
      return;
    }

    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData);

    try {
      await axios.post(
        `${backendUrl}/api/v1/cart/add-cart`,
        { itemId, size },
        { headers: { token } }
      );
    } catch (error) {
      toast.error(error.response?.data?.errors);
    }

    toast.success("Added to cart successfully");
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let tempData = structuredClone(cartItem);
    tempData[itemId][size] = quantity;

    setCartItem(tempData);

    try {
      await axios.post(
        `${backendUrl}/api/v1/cart/update-cart`,
        { itemId, size, quantity },
        { headers: { token } }
      );
    } catch (error) {
      toast.error(error.response?.data?.errors);
    }
  };

  const getUserCart = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/v1/cart/get-cart`,
        {},
        { headers: { token } }
      );

      if (response.status === 200) {
        setCartItem(response.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          totalCount += cartItem[items][item];
        }
      }
    }

    return totalCount;
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/v1/products/getAllProducts`
      );

      if (response.status === 200) {
        setProducts(response.data.data);
      }
    } catch (error) {
      toast.error(error.response?.data?.errors);
    }
  };

  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
  }, []);

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItem) {
      let itemInfo = products.find((product) => product._id === items);

      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          totalAmount += itemInfo.price * cartItem[items][item];
        }
      }
    }

    return totalAmount;
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      getUserCart();
    }
  }, [token]);

  const value = {
    products,
    currency,
    delivery_fee,
    darkTheme,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    setCartItem,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
    userId, // ✅ IMPORTANT (NOW AVAILABLE EVERYWHERE)
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;