import React from "react";
import { NavLink } from "react-router-dom";
function ProductCards({ product }) {
  const {
    _id,
    image,
    name,
    size,
    quantity,
    price,
    paymentMethod,
    orderDate,
    orderStatus,
  } = product;

  // Determine the text color for orderStatus
  let orderStatusColor = "text-blue-600"; // Default color for "Shipped today"
  if (orderStatus === "Refund") {
    orderStatusColor = "text-orange-500"; // Color for "Refund"
  } else if (orderStatus === "Returned") {
    orderStatusColor = "text-red-600"; // Color for "Returned"
  } else if (orderStatus === "Delivered Successfully") {
    orderStatusColor = "text-green-600";
  }

  return (
    <div className="flex w-full border gap-2 border-gray-300 p-4 rounded-lg bg-white drop-shadow-md mb-4">
      {/* First Column: Product Image */}
      <div className="sm:w-1/4 w-3/6 flex items-center justify-center">
      <NavLink to={`/product/${_id}`}>
      <img
          src={image}
          alt={name}
          className="sm:h-36 sm:w-36 w-24 h-24 object-cover rounded-md"
        />
      </NavLink>
      </div>

      {/* Second Column: Product Details, Quantity, Price, Order Date */}
      <div className="sm:w-3/12 w-full ml-3 sm:ml-0 sm:px-4 flex flex-col justify-between">
        {/* First Row: Product Details */}
        <div className="flex flex-col sm:gap-1 mb-1">
          <h3 className="sm:text-lg text-sm mb-2 sm:mb-0 font-semibold">{name}</h3>
          <div className="inline-flex gap-2 flex-row">
            <p className="text-sm font-medium">Price</p>
            <p className="text-sm font-medium text-green-600">${price}</p>
          </div>
          <div className="flex  gap-2 flex-row">
            <p className="text-sm font-medium">Quantity:</p>
            <p className="text-sm font-semibold">{quantity}</p>
          </div>
          <div className="flex gap-2 flex-row">
            <p className="text-sm font-medium">Size:</p>
            <p className="text-sm font-semibold">{size}</p>
          </div>
          <div className="flex gap-2 flex-row mt-1">
            <p className="sm:text-sm text-[10px] text-gray-500">Ordered on: {orderDate}</p>
          </div>
        </div>
      </div>

      {/* Third Column: Order Status */}
      <div className="w-1/4 text-center hidden sm:flex flex-col justify-center">
        <p className="text-sm font-medium">Order Status</p>
        <p className={`text-lg font-semibold ${orderStatusColor}`}>
          {orderStatus ? orderStatus : "Not Updated"}
        </p>
      </div>

      {/* Fourth Column: Track Order Button */}
      <div className="sm:w-1/4 w-full flex justify-center items-center">
        <button className="sm:px-4 px-2 sm:py-4 py-2 text-sm sm:text-[16px] bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Track Order
        </button>
      </div>

      {/* Final Column: Payment Method */}
      <div className="w-1/4 text-center hidden sm:flex flex-col justify-center">
        <p className="text-sm font-medium">Payment Method</p>
        <p className="text-lg font-semibold text-green-600">
          {paymentMethod ? paymentMethod : "Not Provided"}
        </p>
      </div>
    </div>
  );
}

export default ProductCards;
