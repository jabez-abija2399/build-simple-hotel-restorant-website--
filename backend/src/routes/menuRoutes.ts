import { Router, Request, Response } from 'express';
import { MenuItem } from '../types';
import * as fs from 'fs';
import * as path from 'path';

const router = Router();
const menuFilePath = path.join(__dirname, '../data/menu.json');

// Helper to read menu data
const getMenuData = (): MenuItem[] => {
  const data = fs.readFileSync(menuFilePath, 'utf-8');
  return JSON.parse(data) as MenuItem[];
};

// GET all menu items
router.get('/', (req: Request, res: Response) => {
  try {
    const menu = getMenuData();
    res.json(menu);
  } catch (error) {
    console.error('Failed to read menu data:', error);
    res.status(500).json({ message: 'Failed to retrieve menu items.' });
  }
});

// GET menu item by ID
router.get('/:id', (req: Request, res: Response) => {
  try {
    const menu = getMenuData();
    const item = menu.find(m => m.id === req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Menu item not found.' });
    }
  } catch (error) {
    console.error('Failed to read menu data:', error);
    res.status(500).json({ message: 'Failed to retrieve menu item.' });
  }
});

export default router;