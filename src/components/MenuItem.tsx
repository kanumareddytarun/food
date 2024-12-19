import React from 'react';

interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
  imageUrl: string;
}

export default function MenuItem({ name, description, price, imageUrl }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        {description && (
          <p className="mt-2 text-gray-600">{description}</p>
        )}
        <p className="mt-2 text-orange-600 font-bold">₹{price}</p>
      </div>
    </div>
  );
}