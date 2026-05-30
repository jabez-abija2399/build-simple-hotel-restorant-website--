import React, { useEffect, useState } from 'react';
import { getMenuItems } from '../api';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Appetizer' | 'Main Course' | 'Dessert' | 'Drink';
  imageUrl?: string;
}

const MenuPage: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const items = await getMenuItems();
        setMenuItems(items);
      } catch (err: any) {
        setError(err.message || "Failed to fetch menu items.");
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  if (loading) {
    return <div className="container mx-auto p-8 text-center text-xl">Loading menu...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-8 text-center text-red-600 text-xl">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-serif text-center text-accent mb-12">Our Exquisite Menu</h1>

      {categories.map(category => (
        <section key={category} className="mb-12">
          <h2 className="text-4xl font-serif text-primary border-b-2 border-secondary pb-4 mb-8">
            {category}s
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems
              .filter(item => item.category === category)
              .map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-48 object-cover object-center"
                    />
                  )}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-serif text-accent mb-2">{item.name}</h3>
                    <p className="text-text mb-4 flex-grow">{item.description}</p>
                    <p className="text-xl font-bold text-primary mt-auto">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default MenuPage;