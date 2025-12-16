'use client'

import { X } from 'lucide-react';

/* =======================
   TYPES (API READY)
======================= */

interface FilterItem {
  id: number;
  label: string;
}

interface PopularItem {
  id: number;
  title: string;
  price: number;
  image: string; // you will add image URL later
}

/* =======================
   STATIC DATA (REPLACE WITH API LATER)
======================= */

const categories: FilterItem[] = [
  { id: 1, label: 'Chocolates' },
  { id: 2, label: 'Cakes' },
  { id: 3, label: 'Gift Boxes' },
];

const occasions: FilterItem[] = [
  { id: 1, label: 'Birthday' },
  { id: 2, label: 'Thank you' },
  { id: 3, label: 'Anniversary' },
];

const popularPicks: PopularItem[] = [
  {
    id: 1,
    title: 'Vanilla Celebration Cake',
    price: 550,
    image: './Cnc _search_images/Food1.svg', // add image link later
  },
  {
    id: 2,
    title: 'Customized Chocolate Bar',
    price: 350,
    image: './Cnc _search_images/Food2.svg',
  },
  {
    id: 3,
    title: 'Coffee Cup Cake',
    price: 200,
    image: './Cnc _search_images/Food3.svg',
  },
];

/* =======================
   COMPONENT
======================= */

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      {/* Modal */}
      <div className="relative w-[90%] max-w-5xl rounded-3xl bg-pinkSoft p-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-1 text-gray-600 hover:text-black"
        >
          <X size={24} />
        </button>

        {/* Search Input */}
        <div className="mb-6 flex items-center gap-3 rounded-full bg-pinkSoft px-6 py-4 shadow-sm border border-pinkDark">
          <input
            type="text"
            placeholder="Search Chocolates & Cakes"
            className="w-full outline-none text-sm placeholder-black placeholder:text-lg"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-2 border-pinkDark px-5 rounded-2xl bg-white">

          {/* LEFT FILTERS */}
          <div className="space-y-6 border-r-2 border-pinkDark ">

            {/* Category */}
            <div className='py-3'>
              <h4 className="font-semibold mb-2">Category</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button key={item.id} className="pill-btn">
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion */}
            <div>
              <h4 className="font-semibold mb-2">Occasion</h4>
              <div className="flex flex-wrap gap-2">
                {occasions.map((item) => (
                  <button key={item.id} className="pill-btn">
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* POPULAR PICKS */}
          <div className="md:col-span-2 py-3">
            <h4 className="font-semibold mb-4">Popular Picks</h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {popularPicks.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-white p-3 shadow-sm cursor-pointer hover:shadow-md transition"
                >
                  {/* Image */}
                  <div className="h-28 rounded-lg bg-gray-200 mb-2">
                  
                    <img src={item.image} alt={item.title} className='w-full h-full object-cover rounded-lg' />
                  </div>

                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">Rs. {item.price}</p>
                </div>
              ))}
            </div>
            <div className='bg-pinkSoft w-fit px-3 py-3 rounded-2xl my-5'>
                <p>Try searching:”eggless cake”,”heart chocolate box”,”photo cake”</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
