import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import menuRoutes from './routes/menuRoutes';
import reservationRoutes from './routes/reservationRoutes';

// Load environment variables from .env file
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins (for development)
app.use(express.json()); // Parse JSON request bodies

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Hotel Restaurant API!');
});

// API routes
app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);

// Error handling middleware (optional, but good practice)
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});