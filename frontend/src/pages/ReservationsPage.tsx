import React, { useState } from 'react';
import { submitReservation } from '../api';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
}

const ReservationsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00', // Default time
    guests: 1,
    notes: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const reservation = await submitReservation(formData);
      setMessage({ type: 'success', text: `Reservation confirmed for ${reservation.name} on ${reservation.date} at ${reservation.time}! A confirmation email has been sent to ${reservation.email}.` });
      setFormData({ // Reset form
        name: '', email: '', phone: '', date: '', time: '19:00', guests: 1, notes: '',
      });
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'Failed to submit reservation. Please try again.' });
      console.error("Reservation submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-serif text-center text-accent mb-12">Make a Reservation</h1>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {message && (
          <div
            className={`p-4 mb-6 rounded-md ${
              message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-text text-lg font-bold mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-text text-lg font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-text text-lg font-bold mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-text text-lg font-bold mb-2">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={getTodayDate()}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-text text-lg font-bold mb-2">
              Time:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              min="10:00" // Example opening time
              max="22:00" // Example closing time
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="guests" className="block text-text text-lg font-bold mb-2">
              Number of Guests:
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              min="1"
              max="20"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="notes" className="block text-text text-lg font-bold mb-2">
              Special Requests/Notes:
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-accent transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xl"
            >
              {loading ? 'Submitting...' : 'Confirm Reservation'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationsPage;