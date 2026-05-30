import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-serif text-center text-accent mb-12">Contact Us</h1>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-serif text-primary mb-4">Get in Touch</h2>
          <div>
            <p className="text-lg font-semibold text-text">Address:</p>
            <p className="text-md text-gray-700">The Grand Hotel Restaurant</p>
            <p className="text-md text-gray-700">123 Culinary Lane</p>
            <p className="text-md text-gray-700">Gastronomy City, GC 98765</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-text">Phone:</p>
            <p className="text-md text-gray-700"><a href="tel:+11234567890" className="hover:text-primary transition-colors">(123) 456-7890</a></p>
          </div>
          <div>
            <p className="text-lg font-semibold text-text">Email:</p>
            <p className="text-md text-gray-700"><a href="mailto:info@grandrestaurant.com" className="hover:text-primary transition-colors">info@grandrestaurant.com</a></p>
          </div>
          <div>
            <p className="text-lg font-semibold text-text">Hours of Operation:</p>
            <p className="text-md text-gray-700">Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p className="text-md text-gray-700">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl font-serif text-primary mb-4">Location</h2>
          {/* A simple placeholder for a map or a static image. For a real app, use Google Maps API. */}
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500 text-lg">
            <p>Map Placeholder</p>
          </div>
          <p className="text-sm text-center text-gray-600 mt-2">
            (You can embed a Google Map here with the actual location)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;