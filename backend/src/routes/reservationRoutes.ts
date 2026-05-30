import { Router, Request, Response } from 'express';
import { Reservation } from '../types';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

const router = Router();
const reservationsFilePath = path.join(__dirname, '../data/reservations.json');

// Helper to read reservations data
const getReservationsData = (): Reservation[] => {
  const data = fs.readFileSync(reservationsFilePath, 'utf-8');
  return JSON.parse(data) as Reservation[];
};

// Helper to write reservations data
const saveReservationsData = (reservations: Reservation[]): void => {
  fs.writeFileSync(reservationsFilePath, JSON.stringify(reservations, null, 2), 'utf-8');
};

// GET all reservations (for internal use, or if an admin panel existed)
router.get('/', (req: Request, res: Response) => {
  try {
    const reservations = getReservationsData();
    res.json(reservations);
  } catch (error) {
    console.error('Failed to read reservations data:', error);
    res.status(500).json({ message: 'Failed to retrieve reservations.' });
  }
});

// POST a new reservation
router.post('/', (req: Request, res: Response) => {
  try {
    const newReservation: Omit<Reservation, 'id' | 'createdAt'> = req.body;

    // Basic validation
    if (!newReservation.name || !newReservation.email || !newReservation.phone || !newReservation.date || !newReservation.time || !newReservation.guests) {
      return res.status(400).json({ message: 'All fields (name, email, phone, date, time, guests) are required.' });
    }
    if (newReservation.guests <= 0) {
      return res.status(400).json({ message: 'Number of guests must be positive.' });
    }

    const reservations = getReservationsData();
    const reservationToAdd: Reservation = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      ...newReservation,
    };

    reservations.push(reservationToAdd);
    saveReservationsData(reservations);

    res.status(201).json({ message: 'Reservation created successfully!', reservation: reservationToAdd });
  } catch (error) {
    console.error('Failed to create reservation:', error);
    res.status(500).json({ message: 'Failed to create reservation.' });
  }
});

export default router;