'use client'

import React, { useState, useEffect } from 'react'
import Big_Product_Card from '../Big_Product_Card';

interface Product {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
}

const Featured: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    // Simulate API call
    useEffect(() => {
        const featuredProducts: Product[] = [
     {
        id: 1,
        title: "Chocolate Box",
        price: 350,
        imageUrl: "./cnc_product_image/Item1.png",
      },
      {
        id: 2,
        title: "Celebration Cake",
        price: 500,
        imageUrl: "./cnc_product_image/Item2.png",
      },
      {
        id: 3,
        title: "Chocolate Bar Set",
        price: 250,
        imageUrl: "./cnc_product_image/Item3.png",
      },

    ];

    setProducts(featuredProducts);

    },[])
  return (
    <section className='flex flex-col rounded-4xl bg-pinkSoft py-12 px-20 mx-9 my-1'>
        <div className='text-left ml-10 my-10 '>
            <h2 className='text-3xl font-bold'>Featured Selections</h2>
            <p className='text-pinkDark text-xl font-semibold'>Our most loved creations this week.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-6'>
            {products.map((product) => (
                <Big_Product_Card 
                key={product.id} 
                title={product.title} 
                price={product.price} 
                imageUrl={product.imageUrl} 
                onAddToCart={() => console.log(`${product.title} added to cart`)}  
                />
            ))}
        </div>
    </section>
  )
}

export default Featured