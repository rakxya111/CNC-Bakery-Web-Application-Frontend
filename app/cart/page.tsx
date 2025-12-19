import { cartAddons, cartProducts, cartSummary, suggestedProducts } from "@/data/cartData";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";


export default function CartPage() {
  return (
    <div className="min-h-screen bg-pinkSoft flex items-center justify-center p-10 ">
      <div className="bg-pinkSoft rounded-2xl w-full border border-pinkSoft">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 text-sm font-medium">
          <a href="/"><ChevronLeft size={30} /></a>
          <span><img src="/Icons-Image/cartt.svg" alt="" /></span>
          <span className="text-xl font-bold">Added to cart</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  bg-white rounded-2xl ">
          
          {/* LEFT SECTION */}
          <div className="space-y-6">
            {cartProducts.map((product) => (
              <div key={product.id} className="flex gap-4 py-5 px-5">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">
                    {product.description}
                  </p>
                  <p className="text-xs mt-1 bg-[#FDEFE6] inline-block px-3 py-1 rounded-full">
                    “Happy Birthday Ava”
                  </p>
                </div>
              </div>
            ))}

            {suggestedProducts.map((item) => (
              <div key={item.id} className="flex gap-4 px-5">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-orange-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          
          {/* RIGHT SECTION */}
          <div className="space-y-4 border-l border-pinkDark">
            <h3 className="font-semibold mb-2 px-5 py-1">Your Cart</h3>

            {cartProducts.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center py-5 px-5 bg-pinkSoft mx-5 rounded-2xl"
              >
                <div className="flex gap-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-gray-500">
                      Qty {product.quantity} · from Rs.{product.price}
                    </p>
                  </div>
                </div>
                <span className="text-sm">Rs.{product.price}</span>
              </div>
            ))}

            {cartAddons.map((addon) => (
              <div
                key={addon.id}
                className="flex justify-between items-center bg-pinkSoft py-5 mx-5 rounded-2xl"
              >
                <div className="flex gap-3 px-5">
                  <Image
                    src={addon.image}
                    alt={addon.title}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-sm font-medium">{addon.title}</p>
                    <p className="text-xs text-orange-500">
                      {addon.subtitle}
                    </p>
                  </div>
                </div>
                <span className="text-sm px-5">Rs.{addon.price}</span>
              </div>
            ))}

         

            <div className="space-y-2 text-sm border-t border-pinkDark ">
              <div className="flex justify-between px-5 py-1">
                <span>Sub Total</span>
                <span>Rs.{cartSummary.subTotal}</span>
              </div>
              <div className="flex justify-between px-5 ">
                <span>Delivery</span>
                <span className="text-green-600">
                  {cartSummary.delivery === 0 ? "Free" : `Rs.${cartSummary.delivery}`}
                </span>
              </div>
              <div className="flex justify-between font-semibold px-5 ">
                <span>Total</span>
                <span>Rs.{cartSummary.total}</span>
              </div>
            </div>
        
        
          </div>
       
        {/* Footer Note */}
    </div>
        <div className="text-sm  text-black  my-3 mx-10 bg-pinkSoft">
         <span className="">Review your cart details above. You can proceed from the checkout page in the next step.</span> 
        </div>
    </div>
    </div>
  );
}
