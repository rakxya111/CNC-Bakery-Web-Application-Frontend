import { Cake } from 'lucide-react';
import React from 'react'

const PreviewSection: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-h-fit border-2 border-pinkMedium">
      <h2 className="text-2xl font-bold text-gray-800 mb-7">Live preview image</h2>
      <div className="aspect-square bg-linear-to-br from-orange-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 ">
        <div className="text-center">
          {/* <Cake className="w-24 h-24 text-orange-400 mx-auto mb-4" /> */}
          <p className="text-pinkDark font-medium">Live Preview Image</p>
        </div>
      </div>
      <div className="rounded-lg p-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-black">Total</span>
          <span className=" font-semibold text-black">Rs.500</span>
        </div>
      </div>
    </div>
  );

}

export default PreviewSection