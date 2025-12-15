import React from "react";

const SHIPPING_DETAILS = {
  title: "Shipping Details",
  fields: [
    "Full Name",
    "Phone No",
    "Email",
    "City",
    "Postal Code",
    "Delivery Date",
  ],
};

const PAYMENT_DETAILS = {
  title: "Payment",
  fields: ["Cardholder name", "Card Number", "Expiry", "CVC"],
};

const CheckoutLeft = () => {
  return (
    <div className="md:col-span-2 bg-white rounded-2xl border border-pinkMedium p-6 w-[590px]">
      
      {/* Shipping Section */}
      <h2 className="font-semibold mb-4">{SHIPPING_DETAILS.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {SHIPPING_DETAILS.fields.map((field) => (
          <input
            key={field}
            placeholder={`${field}:`}
            className="border border-pinkMedium rounded-full px-4 py-2 text-sm focus:outline-none placeholder-pinkMedium"
          />
        ))}
      </div>

      {/* Payment Section */}
      <h2 className="font-semibold mb-4">{PAYMENT_DETAILS.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {PAYMENT_DETAILS.fields.map((field) => (
          <input
            key={field}
            placeholder={`${field}:`}
            className="border border-pinkMedium rounded-full px-4 py-2 text-sm focus:outline-none placeholder-pinkMedium"
          />
        ))}
      </div>

      <button className="primary-button px-10">
        Place Order
      </button>
    </div>
  );
};

export default CheckoutLeft;
