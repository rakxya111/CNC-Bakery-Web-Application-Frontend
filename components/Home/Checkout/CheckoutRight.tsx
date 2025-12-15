import React from "react";
interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

// MOCK DATA
const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Custom Red Velvet Cake",
    description: '8", Cream, Berries',
    price: 500,
  },
  {
    id: 2,
    name: "Hazelnut Chocolate Box",
    description: "1pc",
    price: 250,
  },
];


const CheckoutRight = () => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white rounded-2xl border border-pinkMedium p-10 w-[390px]">
      <h2 className="font-semibold mb-4">Cart Summary</h2>

      {/* Empty cart state */}
      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-400">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border border-pinkMedium rounded-xl w-80 p-2"
            >
              <div className="font-medium">{item.name}</div>

              <div className="text-sm text-pinkMedium flex items-center justify-between">
                <span>{item.description}</span>
                <span className="text-black">Rs.{item.price}</span>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between font-semibold pt-2">
            <span>Total</span>
            <span>Rs.{total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutRight;
