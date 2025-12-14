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
    <div className="bg-white rounded-2xl shadow-lg p-5 max-h-fit border-2 border-pinkMedium">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Summary</h2>
      <div className="space-y-3 mb-5">
        {summaryItems.map((item) => (
          <div key={item.label} className="bg-pinkSoft rounded-lg p-4 space-x-5">
            <span className="text-sm text-black">{item.label}:</span>
            <span className="font-medium text-black">{item.value}</span>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center'>
      <button className="primary-button">
        Add to cart
      </button>
      </div>
    </div>
  );
};

export default SummarySection