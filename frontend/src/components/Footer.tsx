import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white p-6 text-center mt-auto shadow-inner">
      <div className="container mx-auto">
        <p className="text-lg font-serif mb-2">The Grand Restaurant</p>
        <p className="text-sm">123 Culinary Lane, Gastronomy City, GC 98765</p>
        <p className="text-sm">Phone: (123) 456-7890 | Email: info@grandrestaurant.com</p>
        <p className="mt-4 text-xs opacity-80">&copy; {new Date().getFullYear()} The Grand Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;