'use client'

import { Product } from "@/types/Product";

import Small_Product_Card from "../Small_Product_Card";
import ProductModal from "../ProductModal";
import { useState } from "react";

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Strawberry Cupcake",
    price: 75,
    imageUrl: "/cnc_food_image/Cupcake.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quod sed voluptate facilis? Repellendus nesciunt adipisci perferendis. A magni porro aliquam repellendus harum esse inventore eligendi optio omnis, nostrum sequi.",
  },
  {
    id: 2,
    name: "Chocolate Cake",
    price: 175,
    imageUrl: "/cnc_food_image/ChocolateCake.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quod sed voluptate facilis? Repellendus nesciunt adipisci perferendis. A magni porro aliquam repellendus harum esse inventore eligendi optio omnis, nostrum sequi.",
  },

  {
    id: 3,
    name: "Crispy Waffle",
    price: 155,
    imageUrl: "/cnc_food_image/Waffle.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quod sed voluptate facilis? Repellendus nesciunt adipisci perferendis.",
  },
  {
    id: 4,
    name: "Hazelnet Box",
    price: 250,
    imageUrl: "/cnc_food_image/HazelBox.png",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quod sed voluptate facilis? Repellendus nesciunt adipisci perferendis. A magni porro aliquam repellendus harum esse inventore eligendi optio omnis, nostrum sequi.",
  },
];

const ProductCatalog = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className=" flex flex-col py-12 px-10 mx-9 ">
      <div className="text-left mx-10 mb-10">
        <h2 className="text-3xl font-bold">Product Catalog</h2>
        <p className="text-pinkDark text-md pt-2">
          Browse categories,filter and find your treat.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {mockProducts.map((product) => (
          <Small_Product_Card
            key={product.id}
            product={product}
            onQuickView={setSelectedProduct}
            onAddToCart={() => {
              console.log(`${product.name} clicked Add to Cart`);
            }}
          />
        ))}
      </div>

       {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={() => {
            console.log(`${selectedProduct.name} clicked Add to Cart`);
          }}
        />
      )}

    </section>
  );
};

export default ProductCatalog;
