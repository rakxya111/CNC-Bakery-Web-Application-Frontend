import { Product } from "@/types/Product";
import Image from "next/image";

interface Props {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const Small_Product_Card: React.FC<Props> = ({
  product,
  onQuickView,
  onAddToCart,
}) => {
  return (
    <div className="bg-pinkSoft rounded-lg shadow-md flex flex-col items-center px-5 pt-2">
        <Image
        src={product.imageUrl}
        alt={product.name}
        width={180}
        height={180}
        className="object-cover rounded-full mb-4"
        />

      <div className="text-left">
        <h3 className="text-lg font-medium text-black">{product.name}</h3>
        <p className="text-black text-lg font-light">
            Rs. {product.price}
        </p>
      </div>

      
      <div className="flex justify-between gap-8 my-4 ">
        <button className=" text-pinkDark bg-none" onClick={() => onQuickView(product)}>
          Quick View
        </button>
        <button
          className="primary-button"
          onClick={() => onAddToCart(product)}
        >
          Add to cart
        </button>
      </div>
    
    
    </div>
  );
};

export default Small_Product_Card;
