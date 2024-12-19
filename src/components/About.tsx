import React from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Tarun's Spicy Hub, we celebrate the bold and rich flavors of Telugu cuisine. 
              Every dish is crafted with care and inspired by time-honored recipes, promising 
              an unforgettable culinary journey.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="text-orange-600" />
                <span>Open Monday-Sunday: 11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-orange-600" />
                <span>Plot 45, Food Street, Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-600" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-600" />
                <span>contact@tarunsspicyhub.com</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=800"
              alt="Restaurant Interior"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Special Events</h3>
              <p>Live Telugu music nights every weekend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}