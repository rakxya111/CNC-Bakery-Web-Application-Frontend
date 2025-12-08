import React from 'react'

interface ProductCardProps {
    title: string;
    price: number;
    imageUrl: string;
    onAddToCart: () => void;
}


// This defines a React functional component .This part tells TypeScript : This component expects props that match the ProductCardProps interface.


const Big_Product_Card: React.FC<ProductCardProps> = ({
    title,
    price,
    imageUrl,
    onAddToCart,    
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="flex gap-8 items-center justify-between px-5 mb-8">
        <div className='mt-2'>
        <h2 className="text-lg font-semibold text-black">{title}</h2>
        <p className="text-black  text-xl">Rs.{price}</p>
        </div>
        
        <button
          onClick={onAddToCart}
          className="mt-4  bg-pinkMedium text-white py-2 px-4 rounded-2xl"
        >
          Add to cart
        </button>
      </div>
    </div>


  )
}

export default Big_Product_Card