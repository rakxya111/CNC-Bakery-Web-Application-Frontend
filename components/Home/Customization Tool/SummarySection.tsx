import { CustomizationOptions } from '@/types/ProductCustomization';
import React from 'react'

interface SummaryComponentProps {
  options: CustomizationOptions;
}

const SummarySection : React.FC<SummaryComponentProps> = ({ options }) => {
  const summaryItems = [
    { label: 'Base', value: options.base },
    { label: 'Size', value: options.size },
    { label: 'Flavor', value: options.flavor },
    { label: 'Filling', value: options.filling },
    { label: 'Decor', value: options.decor },
    { label: 'Message', value: options.message }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Summary</h2>
      <div className="space-y-3 mb-6">
        {summaryItems.map((item) => (
          <div key={item.label} className="bg-orange-50 rounded-lg p-3">
            <div className="text-sm text-gray-600 mb-1">{item.label}:</div>
            <div className="font-semibold text-gray-800">{item.value}</div>
          </div>
        ))}
      </div>
      <button className="w-full bg-linear-to-r from-orange-400 to-pink-400 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-500 hover:to-pink-500 transition-all shadow-md hover:shadow-lg">
        Add to cart
      </button>
    </div>
  );
};

export default SummarySection