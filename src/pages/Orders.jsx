import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import ProductCards from "../components/ProductCards";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ScreenLoadingIcon from "../components/ScreenLoadingIcon"; // Import loading icon

const Orders = () => {
  const { products } = useContext(ShopContext);
  const [loading, setLoading] = useState(true);

  // Simulate data fetching or delay
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      // Simulate loading delay (remove this if using real API)
      setTimeout(() => {
        setLoading(false);
      }, 1500); // Adjust time to your real fetching duration
    };

    fetchData();
  }, []);

  if (loading) {
    return <ScreenLoadingIcon />; // Show the loading screen until data is ready
  }

  const copyOne = products.slice(0, 1);
  const testImg = copyOne[0].image[0];

  const products2 = [
    {
      image: testImg, // Replace with actual image URL
      name: "Sample Product 1",
      size: "M",
      quantity: 2,
      price: 29.99,
      paymentMethod: "Cash on delivery", // or "Already paid"
      orderDate: "02-01-2025",
      orderStatus: "Shipped today",
    },
    {
      image: testImg, // Replace with actual image URL
      name: "Sample Product 2",
      size: "L",
      quantity: 1,
      price: 40.1,
      paymentMethod: "Already paid",
      orderDate: "18-09-2024",
      orderStatus: "Out for delivery",
    },
    {
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      name: "Sample Product 2",
      size: "L",
      quantity: 1,
      price: 27.76,
      paymentMethod: "Already paid",
      orderDate: "11-08-2024",
      orderStatus: "Refund",
    },
    {
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      name: "Sample Product 2",
      size: "L",
      quantity: 2,
      price: 55.0,
      paymentMethod: "Cash on delivery",
      orderDate: "08-07-2024",
      orderStatus: "Returned",
    },
    {
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      name: "Sample Product 2",
      size: "L",
      quantity: 4,
      price: 113.45,
      paymentMethod: "Cash on delivery",
      orderDate: "21-03-2024",
      orderStatus: "Delivered Successfully",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="w-full flex justify-between items-center sm:px-4 shadow-md mb-6">
        <img
          src={assets.logo}
          alt="logo"
          className="sm:w-[163px] sm:h-[103px] w-[115px] h-[95px] object-contain relative -top-[7px]"
        />
        <div className="flex gap-3 items-center">
          <img className="h-6" src={assets.profile_icon} alt="" />
          <h2 className="text-right text-lg mr-1 sm:mr-0 font-semibold">
            Hello, Ashutosh
          </h2>
        </div>
      </div>
      <div className="text-center text-2xl mt-3">
        <Title text1={"YOUR"} text2={"ORDERS"} />
      </div>

      {/* Product Cards Section */}
      <div className="p-6">
        {/* Map through products and render a ProductCard for each */}
        {products.map((product, index) => (
          <ProductCards key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Orders;