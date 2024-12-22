import { Express, Request, Response } from 'express';
import { searchCapitals } from '../controllers/searchController';

export const setRoutes = (app: Express) => {
  app.get('/api', (req: Request, res: Response) => {
    res.send('Hello from Express!');
  });

  app.get('/api/search', searchCapitals);
};