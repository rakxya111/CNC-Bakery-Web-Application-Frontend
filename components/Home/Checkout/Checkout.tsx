"use client";

import React from "react";
import CheckoutLeft from "./CheckoutLeft";
import CheckoutRight from "./CheckoutRight";

export default function Checkout() {
  return (
    <section className=' flex flex-col rounded-4xl bg-pinkSoft px-20 mx-9 mt-5 pb-10' id="cart">
        <div className='text-left ml-10 my-10 '>
            <h2 className='text-3xl font-bold'>Checkout</h2>
            <p className='text-pinkDark text-xl '>Review your cart and complete your order.</p>
        </div>
      
        <div className="flex gap-10">
          <CheckoutLeft />
          <CheckoutRight />
        </div>

    </section>
    
  );
}
