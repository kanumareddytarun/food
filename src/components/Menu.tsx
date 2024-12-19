import React from 'react';
import MenuItem from './MenuItem';

const menuSections = [
  {
    title: 'Starters',
    items: [
      {
        name: 'Mirapakaya Bajji',
        price: '120',
        imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800'
      },
      {
        name: 'Kodi Vepudu',
        price: '280',
        imageUrl: 'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?auto=format&fit=crop&w=800'
      },
      // Add more items...
    ]
  },
  {
    title: 'Main Course',
    items: [
      {
        name: 'Andhra Chicken Biryani',
        price: '320',
        imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800'
      },
      {
        name: 'Gutti Vankaya Curry',
        price: '220',
        imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800'
      },
      // Add more items...
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        
        {menuSections.map((section) => (
          <div key={section.title} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-orange-800">
              {section.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}