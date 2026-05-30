// backend/src/types/index.d.ts

// Define interfaces for your data models

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Appetizer' | 'Main Course' | 'Dessert' | 'Drink';
  imageUrl?: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  guests: number;
  notes?: string;
  createdAt: string; // ISO string
}