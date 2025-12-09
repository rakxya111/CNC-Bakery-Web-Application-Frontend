import { X } from "lucide-react";
import { Product } from "../types/Product";

interface Props {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<Props> = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 shadow-2xl ">
      <div className="bg-white rounded-lg p-6 w-96 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <span>
            <X />
          </span>
        </button>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
        />

        <h2 className="text-xl font-bold text-left">{product.name}</h2>
        <p className="text-left text-black font-light mt-2">
          Rs.{product.price}
        </p>

        <p className="text-sm text-gray-600 mt-4 text-justify">
          {product.description}
        </p>
        <div className="flex justify-center ">
          <button
            className="primary-button my-5 px-30"
            onClick={() => onAddToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
